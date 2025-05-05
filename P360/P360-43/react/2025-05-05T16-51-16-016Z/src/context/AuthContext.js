import React, { createContext, useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 > Date.now()) {
                return { isAuthenticated: true, user: decoded };
            }
        }
        return { isAuthenticated: false, user: null };
    });

    const signIn = async (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setAuthState({ isAuthenticated: true, user: decoded });
    };

    const signOut = () => {
        localStorage.removeItem('token');
        setAuthState({ isAuthenticated: false, user: null });
    };

    return (
        <AuthContext.Provider value={{ ...authState, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);