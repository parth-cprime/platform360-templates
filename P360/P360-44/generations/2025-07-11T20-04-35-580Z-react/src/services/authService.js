import api from './api';

// authService handles authentication operations with the backend API
const authService = {
    // Function to validate JWT token
    validateToken: async (token) => {
        try {
            const response = await api.get('/validate', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data; // Return user data on success
        } catch (error) {
            throw new Error('Token validation failed'); // Throw error on failure
        }
    },

    // Function to login user
    login: async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            return {
                token: response.data.token,
                user: response.data.user
            }; // Return token and user data on success
        } catch (error) {
            throw new Error('Login failed'); // Throw error on failure
        }
    }
};

export default authService;