<template>
    <section>
    <b-container fluid>
        <b-row>
            
            <b-col cols="2">
                
                <b-row cols="4" class="keyList">
                    <div v-for="(key) in keys" :key="key">
                    <span><b-link @click ="changeKey($event, key)" class="wordKey"><strong><em>{{key}}</em></strong></b-link></span>
                    </div>
                    
                </b-row>
                total words : 123<br/>
                total points : 308<br/>
                total rounds : 27                
            </b-col>
            
            <b-col cols="9">
                All the {{this.currentCharacter}} words....
                
            <div v-for="(word, wordIndex) in this.wordList" :key="wordIndex"> 
                <b-card-group deck>
                <Draggable>
                
                    <b-card :title="word.word" >
                    <b-card-text v-for="(definition ,index) in word.results.length > 3 ? word.results.slice(0,3) : word.results " :key="index">
                        <p>
                            {{index+1}}. {{definition.definition}}, <em>{{definition.partOfSpeech}}</em>
                        </p>
                    </b-card-text>
                    </b-card>
</Draggable>
                </b-card-group>
</div>


            </b-col>
        </b-row>
        
      </b-container>

    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import WordsApi from '../api/words.js'

export default {
    name: 'WordBook',
    data() {
        return{
            currentCharacter: 'A', 
            wordList: []
        }
    },
    computed: {
        ...mapGetters({
            'words' : 'words', 
            'keys' : 'keys', 
            'wordsArr' : 'wordsArr'
        })
        
    }, 
    methods: {
        changeKey(event, k){
            event.preventDefault();
            this.currentCharacter = k 
            this.wordList = []
            this.words[this.currentCharacter].forEach((word) => {
                WordsApi.getWordInfo(word).then((res)=>{
                    this.wordList.push(res.data)
                })

            })
            
        }
    }
}
</script>
<style lang="scss" scoped>

.section {
    
}
.container{
    margin: 0px;
    padding: 0px;
    background-color: whitesmoke !important;
    
}
.keyList{
    background: rgba(0,0,0,.2);
    text-align: center;
    padding: 0.75rem 1.25rem;
    border-radius: 0.7rem;
    position: sticky;
    top: 0;
    left: 0;

}
.card{
    background: rgba(0,0,0,.08);
    margin: 0.75rem 3rem;
    
    .card-title{
        
        letter-spacing: .1rem;
    }
    .card-text{
        font-size: 16px;
    }
}
a{
    color: greenyellow !important;
    opacity: 80% ;
}
.col{
    padding-left: 5%;
}
</style>