// Utility functions for handling authentication tokens in local storage
const TOKEN_KEY = 'authToken';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = token => localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const isAuthenticated = () => !!getToken();