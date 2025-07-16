import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { decryptData } from '../utils/security';

const AuthContext = createContext(null);

/**
 * Provides authentication context to the application.
 * Manages user state and authentication procedures.
 * @param {Object} props - Props passed to the AuthProvider.
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            authService.validateToken(token)
                .then(userData => {
                    const decryptedUserData = decryptData(userData);
                    setUser(decryptedUserData);
                })
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
        setUser(decryptData(user));
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

export const useAuth = () => useContext(AuthContext);