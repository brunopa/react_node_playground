import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-dot-brunosplayground.appspot.com/'
});

export default api;