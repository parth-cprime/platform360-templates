import api from './api';

// Authentication service to handle API calls for login and token validation
const authService = {
    login: async (credentials) => {
        // Send credentials to the login endpoint and return the response
        const response = await api.post('/login', credentials);
        return response.data;
    },
    validateToken: async (token) => {
        // Send token to a validation endpoint to verify and return user data
        const response = await api.get('/validate', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
};

export default authService;