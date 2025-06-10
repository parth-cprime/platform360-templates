import api from './api';

// Service for handling authentication tasks
const authService = {
    // Function to login user
    login: async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    },

    // Function to validate JWT token
    validateToken: async (token) => {
        try {
            const response = await api.post('/validate', { token });
            return response.data.user;
        } catch (error) {
            throw new Error('Token validation failed');
        }
    }
};

export default authService;