import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
        const { token } = useAuth(); // Use the useAuth hook to get the current token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Append token to headers if present
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // If a 401 Unauthorized response is received, clear the token and redirect to login
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;