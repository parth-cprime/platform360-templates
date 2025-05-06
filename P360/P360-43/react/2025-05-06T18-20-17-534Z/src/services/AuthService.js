import axios from 'axios';

export const authenticateUser = async (username, password) => {
    try {
        const response = await axios.post('/api/auth/login', {
            username,
            password,
        });
        const { data } = response;
        if (data.token) {
            // Store the token in local storage or in-memory storage for future requests
            localStorage.setItem('authToken', data.token);
            return data.user;
        }
    } catch (error) {
        console.error("Authentication failed", error);
        throw error;
    }
};