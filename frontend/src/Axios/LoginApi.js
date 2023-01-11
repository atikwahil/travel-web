import axios from 'axios'

const baseURL = 'https://127.0.0.1:8000/login/';


const loginAPI = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers:{
        Authorization: {

        }
    }
})