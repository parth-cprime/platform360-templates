import axios from 'axios';

// This service handles the calls to the backend

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
  }
}

export default authService;