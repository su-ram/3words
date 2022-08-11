(function(){"use strict";var t={1099:function(t,r,e){var s=e(8935),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",[e("link",{attrs:{rel:"preconnect",href:"https://fonts.googleapis.com"}}),e("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}}),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:wght@400;500&display=swap",rel:"stylesheet"}}),e("div",{attrs:{id:"app"}},[e("div",[e("b-tabs",{attrs:{"content-class":"mt-3",small:"",align:"right"}},[e("b-tab",{attrs:{title:"Game",active:""}},[e("WordInput")],1),e("b-tab",{attrs:{title:"WordBook"}},[e("WordBook")],1),e("b-tab",{attrs:{title:"Instruction"}},[e("p",[t._v("Page that how to use this service.")])])],1)],1)])])},a=[],n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",[e("div",{staticClass:"text"},[e("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.1",rel:"stylesheet",type:"text/css"}}),e("div",{staticClass:"terminal"},[e("b-container",[e("button",{ref:"roundBtn",staticClass:"count-round"},[t._v("Round")]),e("transition",{attrs:{"enter-active-class":"animated bounce"},on:{"after-enter":t.afterEnter}},[e("span",{key:t.round,staticClass:"round-no"},[e("strong",[t._v(t._s(t.round))])])]),e("b-row",{attrs:{"align-v":"start"}},[e("b-col",[e("h1",{attrs:{id:"hello"}},[t._v(" Show me 3 words "),e("br"),t._v(" that start with .... ")])]),e("b-col",[e("transition",{attrs:{"enter-active-class":"animated rotateIn slower","leave-active-class":"animated rotateOut"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],key:t.character,staticClass:"start-character"},[t._v(" "+t._s(t.character))])])],1)],1),e("b-form",{staticClass:"inputForm",on:{submit:t.onSubmit}},[e("b-form-input",{staticClass:"word-input",attrs:{autofocus:"",placeholder:"Drop a word here."},model:{value:t.word,callback:function(r){t.word=r},expression:"word"}}),this.showFeedback.startsWith?e("span",{staticClass:"warning-text"},[e("em",[t._v("Please starts with [ "+t._s(t.character)+" ], Think well. ")])]):t._e(),this.showFeedback.notFound?e("span",{staticClass:"warning-text"},[e("em",[t._v("There's no such a word like [ "+t._s(this.word)+" ], Try again. ")])]):t._e()],1),e("div",{staticClass:"three-words"},[e("transition-group",{attrs:{tag:"div","leave-active-class":"animated bounceOut faster","enter-active-class":"animated fadeIn"}},t._l(t.threeWords,(function(r,s){return e("div",{key:s,staticClass:"list-item"},[t._v(" _ "+t._s(r)+" ")])})),0)],1)],1)],1)])])},i=[],d=e(3927),c=e(6199),u=e.n(c),h=e(4665),l=e(6166),f=e.n(l);const p={options:{headers:{"X-RapidAPI-Key":"25522c5b3fmsh9a332c0583b7aa9p1ae180jsn6c40980134eb","X-RapidAPI-Host":"wordsapiv1.p.rapidapi.com"}},getWordInfo:function(t){return f().get("https://wordsapiv1.p.rapidapi.com/words/"+t,this.options)}};var w=p,m={name:"WordInput",data(){return{word:"",threeWords:[],character:this.getRandomCharacter(),show:!1,type:{},showFeedback:{startsWith:!1,notFound:!1},round:1}},mounted(){this.type=new d.Z("#hello",{speed:28,html:!0,afterComplete:t=>{t.destroy(),this.show=!0}}),this.type.go()},watch:{threeWords:function(){this.threeWords.length>=3&&(this.character=this.getRandomCharacter(),this.goNextRound(),this.type.reset().go(),this.show=!1,this.addTheseWords(this.threeWords),this.$store.commit("addWordsArr",this.threeWords))},word:function(){""===this.word&&(this.showFeedback.startsWith=!1,this.showFeedback.notFound=!1)}},methods:{...(0,h.OI)({addTheseWords:"addWords"}),onSubmit(t){t.preventDefault(),this.validateWord(this.word).then((t=>{t&&(this.threeWords.push(this.word),this.word="")}))},afterEnter(){this.threeWords.splice(0,3)},getRandomCharacter(){return String.fromCharCode(Math.floor(26*Math.random()+65))},getShow(){this.show=!0},async validateWord(t){if(!t.toLowerCase().startsWith(this.character.toLowerCase()))return this.showFeedback.startsWith=!0,!1;try{return await w.getWordInfo(t),!0}catch(r){return this.showFeedback.notFound=!0,!1}},goNextRound(){u().confetti(this.$refs.roundBtn),this.round+=1}}},b=m,v=e(1001),g=(0,v.Z)(b,n,i,!1,null,"47ba7d44",null),y=g.exports,_=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"1"}},[e("div",{staticClass:"wordKey"},[e("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(r){var s=r.ariaDescribedby;return[e("b-form-radio-group",{attrs:{id:"btn-radios-3",options:t.keys,"aria-describedby":s,buttons:"",size:"sm"},model:{value:t.currentCharacter,callback:function(r){t.currentCharacter=r},expression:"currentCharacter"}})]}}])})],1)]),e("b-col",{attrs:{cols:"9"}},[e("div",{staticClass:"mywords"},[e("div",{staticClass:"word-search"},[t._v(" All the "),e("span",{staticClass:"start-character"},[t._v(t._s(this.currentCharacter))]),t._v(" words.... ")]),e("b-card-group",{attrs:{columns:""}},[e("Draggable",t._l(this.wordList,(function(r,s){return e("b-card",{key:s,attrs:{title:r.word}},[e("b-card-text",t._l(r.results.length>3?r.results.slice(0,3):r.results,(function(r,s){return e("div",{key:s},[e("span",[t._v(" "+t._s(s+1)+". "+t._s(r.definition)+", "),e("em",[e("small",[t._v("("+t._s(r.partOfSpeech)+")")])])])])})),0)],1)})),1)],1)],1)]),e("b-col",{attrs:{cols:"2"}},[e("b-form-input",{staticClass:"word-search",attrs:{id:"input-small",size:"sm",placeholder:"search the word"}})],1)],1)],1)],1)},k=[],C={name:"WordBook",data(){return{currentCharacter:"A",wordList:[],test:"a"}},watch:{currentCharacter(){this.getWordsInfo()}},computed:{...(0,h.Se)({words:"words",keys:"keys",wordsArr:"wordsArr"})},mounted(){this.getWordsInfo()},methods:{getWordsInfo(){this.wordList=[],this.words[this.currentCharacter].forEach((t=>{w.getWordInfo(t).then((t=>{this.wordList.push(t.data)}))})),this.wordList=[...this.wordList,...this.wordList,...this.wordList]}}},W=C,O=(0,v.Z)(W,_,k,!1,null,"5fabe8b5",null),x=O.exports,S=e(1789),A={name:"App",components:{WordInput:y,WordBook:x},data(){return{round:1}},mounted(){(0,S.ve)("https://cdn.rawgit.com/web-animations/web-animations-js/2.2.2/web-animations.min.js"),(0,S.ve)("https://cdn.rawgit.com/gibbok/animatelo/1.0.3/dist/animatelo.min.js")}},I=A,j=(0,v.Z)(I,o,a,!1,null,null,null),F=j.exports,L=e(150),P=e(6195);s["default"].use(P.a7),s["default"].config.productionTip=!1,s["default"].prototype.$axios=f(),s["default"].use(L.XG7),s["default"].use(h.ZP);const T=new h.ZP.Store({state(){return{words:{},wordsArr:[],keys:Array.from({length:26},((t,r)=>String.fromCharCode(r+65)))}},getters:{words(t){return t.words},wordsArr(t){return t.wordsArr},keys(t){return t.keys}},mutations:{addWords(t,r){const e=r[0][0].toUpperCase();void 0===t.words[e]&&(t.words[e]=[]);const s=[...r,...t.words[e]];t.words[e]=s,t.words=Object.assign({},t.words)},addWordsArr(t,r){t.wordsArr=[...t.wordsArr,...r]}}}),R=new s["default"]({render:t=>t(F),store:T});R.$mount("#app")}},r={};function e(s){var o=r[s];if(void 0!==o)return o.exports;var a=r[s]={exports:{}};return t[s].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,s,o,a){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],a=t[u][2];for(var i=!0,d=0;d<s.length;d++)(!1&a||n>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[d])}))?s.splice(d--,1):(i=!1,a<n&&(n=a));if(i){t.splice(u--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,s){var o,a,n=s[0],i=s[1],d=s[2],c=0;if(n.some((function(r){return 0!==t[r]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(d)var u=d(e)}for(r&&r(s);c<n.length;c++)a=n[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},s=self["webpackChunksss"]=self["webpackChunksss"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(1099)}));s=e.O(s)})();
//# sourceMappingURL=app.5e939d5c.js.map