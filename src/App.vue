<template>
<section>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
<div id="app">
  
  <div>
  <b-tabs content-class="mt-3" small align="right">
    <b-tab title="Game" active>
      <WordInput/>
      </b-tab>
    <b-tab title="WordBook">

      <WordBook />
    </b-tab>
    <b-tab title="Ranking" ><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
    
      
    
  </div>
</section>
  
</template>

<script>

import WordInput from './components/WordInput.vue'
import WordBook from './components/WordBook.vue'
import { loadScript } from 'vue-plugin-load-script'
import party from "party-js"

export default {
  name: 'App',
  components: {
    WordInput,
    WordBook,
    
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

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: whitesmoke;
  
}
html {
  width: 100%;
  height: 100%;
}
body {
  font-family: 'Carter One', cursive;
font-family: 'Open Sans', sans-serif;
  background: linear-gradient(to right, #202c4e 0%, #6b2892 100%);
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



#app {
  .nav-tabs{
border-bottom: none;
    .nav-link{
    color: whitesmoke;
    background: transparent;
    border: none;
      .active{
        text-decoration: underline;
      }
    
    }
  }
}
</style>
