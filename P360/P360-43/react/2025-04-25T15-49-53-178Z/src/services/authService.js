import axios from 'axios';

// Replace 'apiBaseUrl' with the actual backend API URL
const apiBaseUrl = 'http://example.com/api';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
};