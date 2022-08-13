import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'
import axios from 'axios'
import { DraggablePlugin } from '@braks/revue-draggable';

// Use as Plugin
Vue.use(DraggablePlugin)

// // or
// Vue.directive('draggable', DraggableDirective)
// Vue.component('Draggable', Draggable)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
    state () {
      return {
        words: {}, 
        wordsArr: [], 
        keys: Array.from({length: 26}, (_, n) => String.fromCharCode(n+65))
      }
    },
    getters: {
      words(state) {
        return state.words
      }, 
      wordsArr(state) {
        return state.wordsArr
      }, 
      keys(state){
        return state.keys
      },
      wordsByKey(state){
        return (key) => {return state.words[key] ? state.words[key] : []}
      }
    },
    mutations: {
      addWord (state, newWord) {
          const keyChr = newWord[0].toUpperCase()
          if (state.words[keyChr] === undefined) {state.words[keyChr] = []}
          const newArr = [ newWord, ...state.words[keyChr]]
          state.words[keyChr] = newArr
          state.words = Object.assign({}, state.words)
        
      }, 
      addWordsArr(state, newWords){
        state.wordsArr = [ ...state.wordsArr, ...newWords]
      }
    }
  })
const myapp = new Vue({
  render: h => h(App), 
  store: store
})

myapp.$mount('#app')
