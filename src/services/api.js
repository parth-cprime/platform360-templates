// API service for interacting with the backend
import axios from "axios";
import { config } from '../config';

// Axios instance for API calls
const api = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json'
    }
});

// Error handling
api.interceptors.response.use(response => {
    return response;
}, error => {
    console.error('API request error: ', error);
    return Promise.reject(error);
});

export default api;