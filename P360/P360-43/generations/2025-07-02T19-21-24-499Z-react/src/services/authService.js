import api from './api';
import { encryptData } from '../utils/security';

/**
 * Authentication service to handle login and token validation.
 * Communicates with the backend API for authentication-related tasks.
 */
const authService = {
    login: async (encryptedCredentials) => {
        try {
            const response = await api.post('/login', { data: encryptedCredentials });
            return response.data;
        } catch (error) {
            console.error('Login service error:', error);
            throw error;
        }
    },
    validateToken: async (token) => {
        try {
            const response = await api.post('/validate-token', { token });
            return response.data.isValid;
        } catch (error) {
            console.error('Token validation error:', error);
            throw error;
        }
    }
};

export default authService;