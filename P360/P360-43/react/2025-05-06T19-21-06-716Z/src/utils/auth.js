import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

// Utility functions for handling JWT in client-side

// Function to get the JWT token from local storage
const getToken = () => {
  return localStorage.getItem('token');
};

// Function to set the JWT token to local storage
const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Function to verify and decode the JWT token
const decodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('Error decoding token:', error);
    throw new Error('Invalid token');
  }
};

export { getToken, setToken, decodeToken };