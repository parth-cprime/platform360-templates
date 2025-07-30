import api from './api';
import { decryptData } from '../utils/security';

/**
 * Service handling authentication API calls, including login and token validation.
 */
const authService = {
    /**
     * Authenticates a user with the provided credentials.
     * @param {Object} credentials - The login credentials.
     * @returns {Promise} - Resolves with the authentication token and user data.
     */
    login: async (credentials) => {
        // Decrypt credentials before sending to server
        const decryptedCredentials = decryptData(credentials);
        const { data } = await api.post('/auth/login', decryptedCredentials);
        return data;
    },

    /**
     * Validates the authentication token stored in localStorage.
     * @param {string} token - The JWT token to validate.
     * @returns {Promise} - Resolves with the user data if the token is valid.
     */
    validateToken: async (token) => {
        const { data } = await api.get('/auth/validate', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return data;
    }
};

export default authService;