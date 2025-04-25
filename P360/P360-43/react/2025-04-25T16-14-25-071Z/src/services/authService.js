import axios from 'axios';

// Function to handle user login
export const loginService = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    if (response.data.token) {
      return response.data.token;
    } else {
      throw new Error('No token returned');
    }
  } catch (error) {
    console.error('Login service error:', error);
    throw error;
  }
};