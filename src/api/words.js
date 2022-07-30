import axios from 'axios';

const WordsApi = {
    options: {
        headers: {
            'X-RapidAPI-Key': '25522c5b3fmsh9a332c0583b7aa9p1ae180jsn6c40980134eb',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
          }
    },
    getWordInfo: function(word) {
        return axios.get('https://wordsapiv1.p.rapidapi.com/words/' + word, this.options)        
    }
}

export default WordsApi;