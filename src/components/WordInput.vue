<template>
    <div
    class="text">
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

<div
class="terminal">
<h1
id="hello">
Show me 3 words <br>
that start with ....</h1>
<transition 
      v-on:after-enter="afterEnter"
      enter-active-class="animated rotateIn slower"
      leave-active-class="animated rotateOut"
      :duration="2000"
      
    >     
<span
      class="start-character"
      :key="character"
      v-show="show"
      >
        {{character}}</span>
        </transition>
</div>

      

        <b-form
        class="inputForm"
        @submit="onSubmit">
            <div>
        <b-form-input 
        autofocus
        v-model="word" placeholder="Drop a word here."
        class="word-input">
        
        </b-form-input>
        
    </div>
    
    </b-form>
    <div
    class="three-words">
    <transition-group 
    
    tag="div"
    leave-active-class="animated bounceOut"
    enter-active-class="animated jello"
    >
    <div  
    class="list-item"
    v-for="(item, index) in threeWords" v-bind:key="index">
         > {{item}}
    </div>
    </transition-group>

    </div>
    
    </div>
</template>
<script>
import TypeIt from 'typeit'

export default {
    name: 'WordInput',
    data() {
        return {
            word: '', 
            threeWords: [], 
            character: this.getRandomCharacter(),
            show: false,
            type: {}
        }
    }, 
    mounted(){
        this.type = new TypeIt('#hello',{
            speed:50,
            html: true,
            afterComplete: (instance) => {
                instance.destroy()
                this.show = true
            }
        })
        this.type.go()
    },
    watch: {
        threeWords: function(){
            if (this.threeWords.length >= 3){
                this.character = this.getRandomCharacter()
                this.$emit('nextRound')
                this.type.reset().go()
                this.show = false
                
            }
        }
    },
    
    methods: {
        onSubmit(event){
            event.preventDefault()
            this.threeWords.push(this.word)
            this.word = ''
        },
        afterEnter(){
            //this.threeWords = []
            this.threeWords.splice(0,3)
        }, 
        getRandomCharacter(){
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
        },
        getShow(){
            this.show = true
        }
    },

}
</script>
<style scoped>

form {
    width:50%;
    margin-top: 2%;
}
.form-control{
    color: whitesmoke;
    background: transparent;
    letter-spacing: .1rem;
}
.form-control:focus{
    background: transparent;
    color: whitesmoke;
    border:none;
}
p {
    color:white;
}
.start-character{
    font-size: 70px;
    font-weight: bold;
    padding-left: 2%;
    padding-right: 2%;
    display: inline-block;    
    font-family: Righteous; 
    color:greenyellow;
    text-shadow: 4px 2px 2px black;   
}
.three-words {
    padding:3%;
    font-size: 150%;
    margin-bottom: 10px;
    letter-spacing: .2rem;
}
.list-item{
    display: block;
    margin-right: 10px;
}
.terminal{
    position: static;
    height: 230px;
}
.inputForm{
    position: static;
    top:1%;
}



</style>