// This service handles authentication related operations

import axios from 'axios';
import jwtDecode from 'jwt-decode';

const tokenKey = "token";

axios.defaults.headers.common['x-auth-token'] = getToken();

export async function login(email, password) {
    const { data: jwt } = await axios.post("/api/auth", { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getToken() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getCurrentUser,
    getToken
};