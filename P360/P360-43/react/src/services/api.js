// This file contains the API service that will handle all the HTTP requests to the backend

import axios from 'axios';
import { getAuthToken } from './auth.js';

// Create instance of axios for HTTP requests
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Include token in the header of every HTTP request
api.interceptors.request.use(async (config) => {
  const token = getAuthToken(); // function to retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  console.error("Error in request interceptor: ", error);
  return Promise.reject(error);
});

export default api;