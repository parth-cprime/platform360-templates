import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// Create a context for auth state
const AuthContext = createContext(null);

/**
 * Provides authentication context to child components, handling user state, login, and logout functionalities.
 * @param {Object} props - The props passed to the AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check for token in localStorage on component mount and validate it
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => setUser(userData))
                .catch(() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [navigate]);

    /**
     * Handles login by setting user token and data in local storage and state.
     * @param {Object} credentials - The user credentials.
     */
    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
    };

    /**
     * Handles user logout by clearing the token from local storage and resetting user state.
     */
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

/**
 * Custom hook to use the auth context.
 * @returns The context with user state, login, and logout functions.
 */
export const useAuth = () => useContext(AuthContext);