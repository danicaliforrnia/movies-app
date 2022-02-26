import axios from 'axios';
import envConfig from '../config';

const http = axios.create({
    baseURL: envConfig.baseUrl,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    (response) => response,
    (error) => Error(error)
);

export default http;
