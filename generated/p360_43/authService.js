import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://api.example.com';

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.error('Login request failed', err);
    throw err;
  }
};

const getUserFromToken = token => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.user;
  } catch (err) {
    console.error('Failed to decode JWT token', err);
    return null;
  }
};

export default {
  login,
  getUserFromToken,
};
