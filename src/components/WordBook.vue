<template>
    <section>
        
    <b-container>
        <b-row>
            
            <b-col cols="3">
                
                <b-row cols="4" class="keyList">
                    <div v-for="(key) in keys" :key="key">
                    <span><b-link @click ="changeKey($event, key)" class="wordKey"><strong><em>{{key}}</em></strong></b-link></span>
                    </div>
                    
                </b-row>
                total words : 123<br/>
                total points : 308
                
            </b-col>
            
            <b-col cols="9">
                All the {{this.currentCharacter}} words....
                
            <div v-for="(word) in words[this.currentCharacter]" :key="word"> 
                <b-card-group deck>
                    <b-card :title="word" >
                    <b-card-text>
                        - definition <br/>
                        1. This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <!-- <template #footer>
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </template> -->
                    </b-card>

                </b-card-group>
</div>


            </b-col>
        </b-row>
        
      </b-container>

    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WordBook',
    data() {
        return{
            currentCharacter: 'A'
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
            
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    margin: 2%;
    padding: 0px;
}
.keyList{
    background: rgba(0,0,0,.2);
    text-align: center;
    padding: 0.75rem 1.25rem;
    border-radius: 0.7rem;

}
.card{
    background: rgba(0,0,0,.08);
    margin: 0.75rem 3rem;
    
    .card-title{
        font-size: 18px;
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