import axios from 'axios';

// Create an Axios instance with default configuration
const http = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to include the JWT in every request if user is logged in
http.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    config.headers['Authorization'] = `Bearer ${user.accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default http;