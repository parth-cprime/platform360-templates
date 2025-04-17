// Importing necessary libraries
import axios from 'axios';
import jwt from 'jsonwebtoken';

// Create a new Axios instance
const instance = axios.create({
  baseURL: 'https://api.yourdomain.com',
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

// Error handling
instance.interceptors.response.use(response => {
  return response;
}, error => {
  console.error('Error:', error);
  return Promise.reject(error.response || error.message);
});

export default instance;