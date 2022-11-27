import axios from 'axios';

const PointsApi = {
    options: {
        headers: {
            'X-RapidAPI-Key': '25522c5b3fmsh9a332c0583b7aa9p1ae180jsn6c40980134eb',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
          }
    },
    getRankingInfo: () => {
        return axios.get('http://localhost:5000/rankinglist')
    }, 
    saveMyPoint: (params) => {
        return axios.post('http://localhost:5000/savepoint', params)
    }
}

export default PointsApi;