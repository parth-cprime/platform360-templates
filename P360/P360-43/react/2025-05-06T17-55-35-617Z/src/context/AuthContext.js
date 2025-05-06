import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../utils/securityConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Placeholder for authentication logic
        // In a real application, you would fetch from an API
        const token = jwt.sign({ username }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
        if (token) {
            setUser({ username, token });
            localStorage.setItem('user', JSON.stringify({ username, token }));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};