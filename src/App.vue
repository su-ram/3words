<template>
<section>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
<div id="app">
    <hello-world/>
    Round # 
    <transition
    enter-active-class="animated flipInX"
    >
      <span
      :key="round">
        {{round}}
        </span>
      </transition>
    <WordInput @nextRound="goNextRound"/>
  </div>
</section>
  
</template>

<script>

import WordInput from './components/WordInput.vue'
import HelloWorld from './components/HelloWorld.vue'
import { loadScript } from 'vue-plugin-load-script'

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
    this.round += 1
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
  width: 100%;
  
}
</style>
