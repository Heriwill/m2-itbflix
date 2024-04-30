import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})//parte que nunca vai mudar

export default api