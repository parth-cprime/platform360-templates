import api from './api';
import { decryptData, encryptData } from '../utils/security';

const authService = {
    login: async (credentials) => {
        // Decrypt credentials before sending to the server
        const decryptedCredentials = decryptData(credentials);
        const response = await api.post('/auth/login', decryptedCredentials);
        return {
            token: response.data.token,
            user: response.data.user
        };
    },
    validateToken: async (token) => {
        // Validate JWT token to check if it's still valid
        const decryptedToken = decryptData(token);
        const response = await api.post('/auth/validate', { token: decryptedToken });
        return response.data;
    }
};

export default authService;