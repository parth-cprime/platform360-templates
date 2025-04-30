import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'YOUR_BACKEND_API_URL'; // Placeholder for your API URL

// Function to login user
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to get current user
export const getCurrentUser = () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken) {
            const decodedToken = jwtDecode(user.accessToken);
            // Check if token has expired
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('user');
                return null;
            }
            return decodedToken;
        }
        return null;
    } catch (error) {
        return null;
    }
};

// Function to logout user
export const logoutUser = () => {
    localStorage.removeItem('user');
};