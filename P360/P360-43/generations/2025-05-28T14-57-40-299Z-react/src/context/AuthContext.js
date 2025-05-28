import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
// This context provides authentication-related data and methods to the entire app
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for token in localStorage on initial load
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => setUser(userData))
                .catch(() => {
                    // If token is invalid, remove it and redirect to login
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [navigate]);

    const login = async (credentials) => {
        // Encrypt and send credentials to login service
        const { token, user } = await authService.login(credentials);
        // Store received token and user data
        localStorage.setItem('token', token);
        setUser(user);
        // Redirect to dashboard after login
        navigate('/dashboard');
    };

    const logout = () => {
        // Remove token from localStorage and clear user data on logout
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        // Provide user data and auth methods to the entire app
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);