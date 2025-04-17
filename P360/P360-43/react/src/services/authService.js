import axios from 'axios';
import jwt from 'jsonwebtoken';

/**
 * Handles the process of user authentication
 * @param {string} username - User's username
 * @param {string} password - User's password
 * @returns {Promise} - Promise object that represents the user token
 */
export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Decodes the JWT from localStorage
 * @returns {{exp: number, iat: number, username: string}} - Decoded token
 */
export const decodeToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error(error);
    throw error;
  }
};