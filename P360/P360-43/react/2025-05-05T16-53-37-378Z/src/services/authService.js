import axios from 'axios';

const API_URL = '/api/auth/';

// Function to login user
const login = async (username, password) => {
    const response = await axios.post(API_URL + 'login', {
        username,
        password,
    });
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Function to get current user
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

// Function to logout user
const logout = () => {
    localStorage.removeItem('user');
};

export default {
    login,
    logout,
    getCurrentUser,
};