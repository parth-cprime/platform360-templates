import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

/**
 * Creates a context for user authentication state.
 */
const AuthContext = createContext(null);

/**
 * Provides the authentication context to child components and manages authentication state.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components to render.
 * @returns {JSX.Element} - The provided context.
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    const login = async (encryptedCredentials) => {
        const { token, user } = await authService.login(encryptedCredentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
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

/**
 * Custom hook to use the auth context.
 * @returns {Object} - The authentication context.
 */
export const useAuth = () => useContext(AuthContext);