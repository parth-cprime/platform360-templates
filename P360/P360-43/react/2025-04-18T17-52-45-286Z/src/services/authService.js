import axios from 'axios';

/**
 * The authService provides functions to interact with the authentication API.
 * It uses axios for HTTP requests and JSON Web Token (JWT) for authentication.
 */
export const loginUser = (username, password) => {
    return axios.post('/api/auth/login', { username, password })
        .then((response) => response.data)
        .catch((err) => {
            console.error(err);
            throw err;
        });
};