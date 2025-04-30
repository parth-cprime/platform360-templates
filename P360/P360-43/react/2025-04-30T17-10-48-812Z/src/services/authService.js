import axios from 'axios';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
};