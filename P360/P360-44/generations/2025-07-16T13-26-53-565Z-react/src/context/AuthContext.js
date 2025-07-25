import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// Create a context for authentication
const AuthContext = createContext(null);

// Provider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Validate the token and set the user state
            authService.validateToken(token)
                .then(userData => setUser(userData))
                .catch(() => {
                    // On token validation failure, clear token and redirect to login
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [navigate]);

    // Function to handle login action
    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
    };

    // Function to handle logout action
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    // Provide the user, login, and logout functionality to the children
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);