<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="1">
          <div class="wordKey">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                id="btn-radios-3"
                v-model="currentCharacter"
                :options="keys"
                :aria-describedby="ariaDescribedby"
                buttons
                size="sm"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </b-col>

        <b-col cols="9">
          <div class="mywords">
            <div class="word-search">
              All the
              <span class="start-character">{{ this.currentCharacter }}</span>
              words....
            </div>
            <b-card-group columns>
              <Draggable>
                <b-card
                  v-for="(word, wordIndex) in this.wordList"
                  :key="wordIndex"
                  :title="word.word"
                >
                  <b-card-text>
                    <div
                      v-for="(definition, index) in word.results.length > 3
                        ? word.results.slice(0, 3)
                        : word.results"
                      :key="index"
                    >
                      <span>
                        {{ index + 1 }}. {{ definition.definition }},
                        <em
                          ><small>({{ definition.partOfSpeech }})</small></em
                        >
                      </span>
                    </div>
                  </b-card-text>
                </b-card>
              </Draggable>
            </b-card-group>
          </div>
        </b-col>

        <b-col cols="2">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="search the word"
            class="word-search"
          ></b-form-input
        ></b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import WordsApi from "../api/words.js";

export default {
  name: "WordBook",
  data() {
    return {
      currentCharacter: "A",
      wordList: [],
      test: "a",
    };
  },
  watch: {
    currentCharacter() {
      this.wordList = [];
      this.words[this.currentCharacter].forEach((word) => {
        WordsApi.getWordInfo(word).then((res) => {
          this.wordList.push(res.data);
          //this.wordList = [ ...this.wordList, ...this.wordList, ...this.wordList]
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      words: "words",
      keys: "keys",
      wordsArr: "wordsArr",
    }),
  },
  methods: {
    changeKey(event, k) {
      event.preventDefault();
      console.log("change key");
      this.currentCharacter = k;
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
}
.container {
  margin: 0px;
  padding: 0px;
  background-color: whitesmoke !important;
}
.keyList {
  text-align: center;
  padding: 0.75rem 1.25rem;
  border-radius: 0.7rem;
  position: sticky;
  top: 0;
  left: 0;
}
.wordKey {
  background: grey;
  margin: 1rem;
}
.card {
  background: rgba(0, 0, 0, 0.08);
  margin: 0.75rem 3rem;
  height: 180px;
  overflow-y: scroll;
  .card-body {
    max-height: inherit;
  }
  .card-title {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
  .card-text {
    font-size: 0.7rem;
  }
}
a {
  color: #e18513 !important;
  opacity: 80%;
}
.col {
  padding-left: 5%;
}
.btn-group,
.btn-group-vertical {
  flex-wrap: wrap !important;
}
.start-character {
  font-family: "Carter One", sans-serif !important ;
  font-size: 200%;
  color: #e18513;
  text-shadow: 4px 2px 2px rgb(52, 64, 43);
}
div .word-search {
  position: sticky;
  top: 0;
}
.word-search .form-control {
  display: initial !important;
  width: 50%;
  align-self: center;
}
</style>
