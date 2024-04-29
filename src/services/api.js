import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviebd.org/3/'
})//parte que nunca vai mudar

export default api