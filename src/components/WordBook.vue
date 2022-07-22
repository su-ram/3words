<template>
    <section>
        <h3>This is your words...</h3>
        <div v-for="(key) in Object.entries(words)" :key="key">
            {{ key[0] }} {{ key[1] }}
            
            
        </div>
        <!-- <b-tabs pills card vertical nav-wrapper-class="w-20">
      <b-tab title="A" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="B"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="C"><b-card-text>Tab contents 3</b-card-text></b-tab> -->


    <!-- </b-tabs> -->

    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WordBook',
    computed: {
        ...mapGetters({
            'words' : 'words'
        })
    }
}
</script>
<style lang="">
    
</style>