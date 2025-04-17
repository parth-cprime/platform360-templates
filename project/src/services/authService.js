// This is the authorization service that handles JWT authentication.

import axios from 'axios';
import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

// Get the JWT token
export function getJwt(){
    return localStorage.getItem(tokenKey);
}

// Save the JWT token
export function login(jwt){
    localStorage.setItem(tokenKey, jwt);
}

// Decode the JWT token
export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey, jwt);
}

// Remove the JWT token
export function logout(){
    localStorage.removeItem(tokenKey);
}

// Get the current user
export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch(ex) {
        return null;
    }
}

export default {
    getJwt,
    login,
    loginWithJwt,
    logout,
    getCurrentUser
}