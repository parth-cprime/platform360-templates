import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// AuthContext provides authentication state and functions throughout the app
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // On component mount, check if a JWT token exists in local storage and validate it
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => setUser(userData)) // Set user data on successful validation
                .catch(() => {
                    // On validation failure, clear token and redirect to login page
                    localStorage.removeItem('token');
                    navigate('/login');
                })
                .finally(() => setLoading(false)); // Set loading to false after the process
        } else {
            setLoading(false); // If no token, just set loading to false
        }
    }, [navigate]);

    // Function to handle user login
    const login = async (credentials) => {
        const { token, user } = await authService.login(credentials);
        localStorage.setItem('token', token); // Store received token in local storage
        setUser(user); // Update user state
        navigate('/dashboard'); // Navigate to dashboard after successful login
    };

    // Function to handle user logout
    const logout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        setUser(null); // Clear user state
        navigate('/login'); // Redirect to login page
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);