<template>
  <section>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <div id="app">
      <div>
        <b-tabs content-class="mt-3" small align="right">
          <b-tab title="Game" active>
            <WordInput />
          </b-tab>
          <b-tab title="WordBook">
            <WordBook />
          </b-tab>
          <b-tab title="Ranking">
            <HelloWorld />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
import WordInput from "./components/WordInput.vue";
import WordBook from "./components/WordBook.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { loadScript } from "vue-plugin-load-script";
export default {
  name: "App",
  components: {
    WordInput,
    WordBook,
    HelloWorld,
  },
  data() {
    return {
      round: 1,
    };
  },
  mounted() {
    loadScript(
      "https://cdn.rawgit.com/web-animations/web-animations-js/2.2.2/web-animations.min.js"
    );
    loadScript(
      "https://cdn.rawgit.com/gibbok/animatelo/1.0.3/dist/animatelo.min.js"
    );
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  .nav-tabs {
    border-bottom: none;
    .nav-link {
      color: black;
      background: transparent;
      border: none;
      .active {
        text-decoration: underline !important;
        text-underline-offset: 3px !important;
      }
    }
  }
}
html {
  width: 100%;
  height: 100%;
}
body {
  height: 100%;
  background-color: #dfdbd6 !important;
  background-color: #dfdbd6 !important;
}

.count-round {
  background: transparent;
  border: unset;
}

.round-no {
  display: inline-block;
}

.characters.btn-group {
  position: fixed;
  bottom: 0px;
  padding-left: 0px;
}
</style>
