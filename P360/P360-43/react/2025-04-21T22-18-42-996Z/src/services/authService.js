import axios from 'axios';

const authService = {
  login: (credentials) => {
    return axios.post('/api/auth/login', credentials);
  },
};

export default authService;