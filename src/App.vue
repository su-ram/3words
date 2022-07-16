<template>
<section>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
<div id="app">
  
    <hello-world/>
    <button class= "count-round" ref="roundBtn"> Round </button>
    <transition
    enter-active-class="animated bounce"
    >
      <span
      class="round-no"
      :key="round">
        <strong>{{round}}</strong>
        </span>
      </transition>
      
    <WordInput @nextRound="goNextRound"/>
    <b-button-group
    class="characters"
    size="sm">
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
</section>
  
</template>

<script>

import WordInput from './components/WordInput.vue'
import HelloWorld from './components/HelloWorld.vue'
import { loadScript } from 'vue-plugin-load-script'
import party from "party-js"

export default {
  name: 'App',
  components: {
    WordInput, HelloWorld
},
data(){
  return {
    round: 1
  }
},
mounted() {
  loadScript('https://cdn.rawgit.com/web-animations/web-animations-js/2.2.2/web-animations.min.js')
  loadScript('https://cdn.rawgit.com/gibbok/animatelo/1.0.3/dist/animatelo.min.js')
  
},
methods: {
  goNextRound(){
    party.confetti(this.$refs.roundBtn)
    this.round += 1
  }, 
  test(){
    party.confetti()
  }
}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: whitesmoke;
  margin-top: 60px;
  
}
html {
  width: 100%;
  height: 100%;
}
body {
  font-family: 'Carter One', cursive;
font-family: 'Open Sans', sans-serif;
  background: linear-gradient(to right, #202c4e 0%, #6b2892 100%);
  padding-left: 10%;
  padding-top: 3%;  
  height: 100%;
}

.count-round{
  background:transparent;
  border: unset;
  color: white;
}

.round-no{
  display:inline-block;
}

.characters.btn-group {
  position: fixed;
  bottom: 0px;
  padding-left: 0px;
}
</style>
