import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// Creating a context for authentication state throughout the application
const AuthContext = createContext(null);

// Provider component to wrap around the application or parts of it that require auth state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Attempt to validate token on app load/reload
        const token = localStorage.getItem('token');
        if (token) {
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

    // Function to handle login - it stores the token and user data
    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        navigate('/dashboard');
    };

    // Function to handle logout - it clears the token and user data
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

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);