// Axios instance for API requests
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach the JWT in the header of every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // Handle request error
  console.error('Request error:', error);
  return Promise.reject(error);
});

export default api;