<template>
  <section>
    <div class="text">
      <link
        href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
        rel="stylesheet"
        type="text/css"
      />

      <div class="terminal">
        <b-container>
          <button class="count-round" ref="roundBtn">Round</button>
          <transition
            v-on:after-enter="afterEnter"
            enter-active-class="animated bounce"
          >
            <span class="round-no" :key="round">
              <strong>{{ round }}</strong>
            </span>
          </transition>
          <b-row align-v="start">
            <b-col>
              <h1 id="hello">
                Show me 3 words <br />
                that start with ....
              </h1>
            </b-col>
            <b-col>
              <transition
                enter-active-class="animated rotateIn slower"
                leave-active-class="animated rotateOut"
              >
                <span class="start-character" :key="character" v-show="show">
                  {{ character }}</span
                >
              </transition>
            </b-col>
          </b-row>
          <b-form class="inputForm" @submit="onSubmit">
            <b-form-input
              autofocus
              v-model="word"
              placeholder="Drop a word here."
              class="word-input"
            >
            </b-form-input>
            <span v-if="this.showFeedback.startsWith" class="warning-text">
              <em>Please starts with [ {{ character }} ], Think well. </em>
            </span>
            <span v-if="this.showFeedback.notFound" class="warning-text">
              <em
                >There's no such a word like [ {{ this.word }} ], Try again.
              </em>
            </span>
          </b-form>

          <div class="three-words">
            <transition-group
              tag="div"
              leave-active-class="animated bounceOut faster"
              enter-active-class="animated fadeIn"
            >
              <div
                class="list-item"
                v-for="(item, index) in threeWords"
                :key="index"
              >
                _ {{ item }}
              </div>
            </transition-group>
          </div>
        </b-container>
      </div>
    </div>
  </section>
</template>
<script>
import TypeIt from "typeit";
import party from "party-js";
import { mapMutations } from "vuex";
import WordsApi from "../api/words.js";
export default {
  name: "WordInput",
  data() {
    return {
      word: "",
      threeWords: [],
      character: this.getRandomCharacter(),
      show: false,
      type: {},
      showFeedback: { startsWith: false, notFound: false },
      round: 1,
    };
  },
  mounted() {
    this.type = new TypeIt("#hello", {
      speed: 28,
      html: true,
      afterComplete: (instance) => {
        instance.destroy();
        this.show = true;
      },
    });
    this.type.go();
  },
  watch: {
    threeWords: function () {
      if (this.threeWords.length >= 3) {
        this.character = this.getRandomCharacter();
        this.goNextRound();
        this.type.reset().go();
        this.show = false;
        this.addTheseWords(this.threeWords);
        this.$store.commit("addWordsArr", this.threeWords);
      }
    },
    word: function () {
      if (this.word === "") {
        this.showFeedback.startsWith = false;
        this.showFeedback.notFound = false;
      }
    },
  },

  methods: {
    ...mapMutations({
      addTheseWords: "addWords",
    }),
    onSubmit(event) {
      event.preventDefault();
      this.validateWord(this.word).then((res) => {
        if (res) {
          this.threeWords.push(this.word);
          this.word = "";
        }
      });
    },
    afterEnter() {
      //this.threeWords = []
      this.threeWords.splice(0, 3);
    },
    getRandomCharacter() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getShow() {
      this.show = true;
    },
    async validateWord(word) {
      if (!word.toLowerCase().startsWith(this.character.toLowerCase())) {
        this.showFeedback.startsWith = true;
        return false;
      }
      try {
        await WordsApi.getWordInfo(word);
        return true;
      } catch (error) {
        this.showFeedback.notFound = true;
        return false;
      }
    },
    goNextRound() {
      party.confetti(this.$refs.roundBtn);
      this.round += 1;
    },
  },
};
</script>
<style scoped>
section {
  padding-top: 7%;
}
form {
  width: 50%;
  margin-top: 2%;
}
#hello {
  letter-spacing: 0.1rem;
}
.form-control {
  color: #252222;
  background: transparent;
  letter-spacing: 0.1rem;
  border: 1px solid rgb(206, 204, 204);
}
.form-control:focus {
  background: transparent;
  color: #252222;
  border: 1px solid rgb(155, 153, 153);
  box-shadow: none;
}
p {
  color: whitesmoke;
}
.start-character {
  font-family: "Carter One", sans-serif !important ;
  padding-left: 10%;
  font-size: 100px;

  display: inline-block;
  font-family: Righteous;
  color: #e18513;
  text-shadow: 4px 2px 2px rgb(52, 64, 43);
}
.three-words {
  padding: 3%;
  font-size: 150%;
  margin-bottom: 10px;
  letter-spacing: 0.2rem;
}
.warning-text {
  letter-spacing: 0.1rem;
  font-size: 70%;
  display: inline-block;
  color: rgb(62, 62, 62);
  opacity: 90%;
  left: 5px;
  top: 3px;
}
.list-item {
  display: block;
  margin-right: 10px;
}
.terminal {
  position: static;
  height: 230px;
}
.inputForm {
  position: relative;
  margin-top: 5%;
  min-height: 77px;
}
.count-round {
  background: transparent;
  border: unset;
  color: rgb(62, 62, 62);
  letter-spacing: 0.1rem;
}
.col {
  max-width: fit-content !important;
}

.row {
  min-height: 150px;
}
</style>
