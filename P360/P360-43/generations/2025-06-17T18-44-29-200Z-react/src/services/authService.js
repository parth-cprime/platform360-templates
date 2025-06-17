import api from './api';
import { decryptData } from '../utils/security';

// Service to handle authentication operations
const authService = {
    login: async (encryptedCredentials) => {
        const credentials = decryptData(encryptedCredentials);
        const response = await api.post('/auth/login', credentials);
        return {
            token: response.data.token,
            user: response.data.user
        };
    },
    validateToken: async (token) => {
        const response = await api.get('/auth/validate', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    }
};

export default authService;