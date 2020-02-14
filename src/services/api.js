import axios from 'axios'
import { getToken } from '../util/token'

export const api = axios.create({
    baseURL: 'https://desolate-eyrie-21186.herokuapp.com/'
})

api.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});