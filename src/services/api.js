import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-10.herokuapp.com'
})

export default api;