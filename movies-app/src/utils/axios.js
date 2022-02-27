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

export default http;
