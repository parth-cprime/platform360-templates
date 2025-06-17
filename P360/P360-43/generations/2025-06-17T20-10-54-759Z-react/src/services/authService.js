import api from './api';

/**
 * Authentication Service
 * Provides functions to authenticate a user and validate tokens.
 */
const authService = {
    login: async (encryptedCredentials) => {
        try {
            const response = await api.post('/auth/login', encryptedCredentials);
            return { token: response.data.token, user: response.data.user };
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    },

    validateToken: async (token) => {
        try {
            const response = await api.get('/auth/validate', {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.user;
        } catch (error) {
            console.error("Token validation failed:", error);
            throw error;
        }
    }
};

export default authService;