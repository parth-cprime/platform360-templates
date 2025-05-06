import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to log in the user
    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setCurrentUser(jwtDecode(token));
        } catch (error) {
            console.error("Authentication error:", error);
            throw new Error('Failed to login');
        }
    };

    // Function to log out the user
    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    // Automatically log in user if token exists and is valid
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                logout();
            } else {
                setCurrentUser(decodedToken);
            }
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};