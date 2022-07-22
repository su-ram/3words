import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
    state () {
      return {
        words: {}
      }
    },
    getters: {
      words(state) {
        return state.words
      }
    },
    mutations: {
      addWords (state, newWords) {
        newWords.forEach((word) => {
          const keyChr = word[0].toUpperCase()
          state.words[keyChr] === undefined ? state.words[keyChr] = [word] : state.words[keyChr].push(word)

        })
      }
    }
  })
const myapp = new Vue({
  render: h => h(App), 
  store: store
})

myapp.$mount('#app')
