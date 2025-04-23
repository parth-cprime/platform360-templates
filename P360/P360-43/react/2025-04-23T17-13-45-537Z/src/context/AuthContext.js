// Import dependencies
import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

/**
 * AuthContext: provides user authentication state and functions to child components.
 */
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            const decoded = jwtDecode(token);
            return { username: decoded.username };
        } else {
            return null;
        }
    });

    const login = (token) => {
        localStorage.setItem('authToken', token);
        const decoded = jwtDecode(token);
        setUser({ username: decoded.username });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};