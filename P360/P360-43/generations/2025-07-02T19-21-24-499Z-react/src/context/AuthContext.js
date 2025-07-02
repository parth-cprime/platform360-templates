import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { decryptData } from '../utils/security';

/**
 * Context for authentication state and logic throughout the app.
 * Handles user state, token validation, login, and logout functionalities.
 */
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = decryptData(token); // Decryption for demonstration; real implementation should verify token server-side
            if (userData) {
                setUser(userData);
                setLoading(false);
            } else {
                logout(); // Automatically logout if token is invalid
            }
        } else {
            setLoading(false);
        }
    }, [navigate]);

    const login = async (encryptedCredentials) => {
        const userData = await authService.login(encryptedCredentials);
        if (userData.token) {
            localStorage.setItem('token', userData.token);
            setUser(decryptData(userData.token)); // Set user data by decrypting the token
            navigate('/dashboard');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);