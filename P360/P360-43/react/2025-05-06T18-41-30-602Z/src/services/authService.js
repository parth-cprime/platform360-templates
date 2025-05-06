import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Base URL for authentication API endpoint
const API_URL = '/api/auth/';

// Function to login user and store the JWT in local storage
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { username, password });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Authentication error:", error.response.data);
    throw error;
  }
};

// Function to logout user by removing the JWT from local storage
export const logoutUser = () => {
  localStorage.removeItem('user');
};

// Function to get current user data from JWT stored in local storage
export const getCurrentUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      const decoded = jwtDecode(user.accessToken);
      return decoded;
    }
    return null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// Function to check if the user is authenticated by verifying the presence of JWT
export const isAuthenticated = () => {
  const user = getCurrentUser();
  return !!user;
};