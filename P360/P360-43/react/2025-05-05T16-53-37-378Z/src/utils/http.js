import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('user'))?.accessToken;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Add logic to handle errors, e.g., redirect to login on 401
        console.error('HTTP request error:', error);
        return Promise.reject(error);
    }
);

export const http = axios;