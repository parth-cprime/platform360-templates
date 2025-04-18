import axios from 'axios';

// Set up axios instance
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

// Request interceptor for API calls
instance.interceptors.request.use(async config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, error => {
  Promise.reject(error);
});

export default instance;