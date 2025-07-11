import api from './api';
import { decryptData } from '../utils/security';

// Service to handle authentication operations
const authService = {
    login: async (encryptedCredentials) => {
        const credentials = decryptData(encryptedCredentials);
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },

    validateToken: async (token) => {
        const response = await api.post('/auth/validate', { token });
        return response.data;
    }
};

export default authService;