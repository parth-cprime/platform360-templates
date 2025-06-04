import api from './api';

/**
 * Authentication service to handle login and token validation.
 */
const authService = {
    /**
     * Login function to authenticate the user.
     * Sends encrypted credentials to the backend.
     * @param {Object} encryptedCredentials - The user's encrypted login information.
     * @returns {Promise} - A promise resolving with the authentication token and user data.
     */
    login: async (encryptedCredentials) => {
        try {
            const response = await api.post('/auth/login', encryptedCredentials);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            throw new Error('Authentication failed');
        }
    },

    /**
     * Validates the JWT token stored in local storage.
     * Ensures the user session is valid or prompts re-authentication.
     * @param {string} token - The JWT token to validate.
     * @returns {Promise} - A promise resolving with the user data.
     */
    validateToken: async (token) => {
        try {
            const response = await api.get('/auth/validate', {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            throw new Error('Token validation failed');
        }
    }
};

export default authService;