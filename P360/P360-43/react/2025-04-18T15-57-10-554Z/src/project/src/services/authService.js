// Import necessary libraries
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Define API endpoint
const apiEndpoint = "/auth";

// Function to login
const login = async (username, password) => {
    const { data: jwt } = await axios.post(apiEndpoint, { username, password });
    localStorage.setItem("token", jwt);
};

// Function to get current user
const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
};

// Function to logout
const logout = () => {
    localStorage.removeItem("token");
};

// Export functions
export default {
    login,
    getCurrentUser,
    logout,
};