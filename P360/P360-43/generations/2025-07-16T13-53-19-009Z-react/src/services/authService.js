import api from './api';

/**
 * AuthenticationService handles the authentication operations with the backend.
 */
const authService = {
    /**
     * Validates the JWT token to check if it's still valid.
     * @param {String} token - JWT token
     * @returns {Promise<Object>} - The user data if the token is valid.
     */
    validateToken: async (token) => {
        try {
            const response = await api.get('/validate-token', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Token validation error: ', error);
            throw error;
        }
    },

    /**
     * Performs the login operation by sending encrypted credentials to the backend.
     * @param {Object} encryptedCredentials - The user encrypted credentials.
     * @returns {Promise<Object>} - The login response including the user data and token.
     */
    login: async (encryptedCredentials) => {
        try {
            const response = await api.post('/login', encryptedCredentials);
            return {
                token: response.data.token,
                user: response.data.user,
            };
        } catch (error) {
            console.error('Login service error: ', error);
            throw error;
        }
    },
};

export default authService;