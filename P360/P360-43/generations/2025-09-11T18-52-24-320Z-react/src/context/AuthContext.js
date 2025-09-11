import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// Create a context for authentication data
const AuthContext = createContext(null);

// Provider component to wrap around the app and provide auth context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // On component mount, check if a token exists and validate it
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => setUser(userData))
                .catch(() => {
                    // If token validation fails, remove the token and redirect to login
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [navigate]);

    // Function to handle login
    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
    };

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        // Provide auth context to the component tree
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);