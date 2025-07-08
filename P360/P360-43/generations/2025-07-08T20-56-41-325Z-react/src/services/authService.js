import api from './api';

// This service handles authentication operations with the API backend.
const authService = {
    login: async (credentials) => {
        try {
            // Encrypt credentials before sending to the server for added security.
            const response = await api.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            console.error('Authentication failed: ', error);
            throw error;
        }
    },
    validateToken: async (token) => {
        try {
            // Sends the token to the backend for validation and to fetch user data.
            const response = await api.post('/auth/validate', { token });
            return response.data;
        } catch (error) {
            console.error('Token validation failed: ', error);
            throw error;
        }
    },
};

export default authService;