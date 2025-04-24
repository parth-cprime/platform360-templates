import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    const setAuthInfo = (token) => {
        const decoded = jwtDecode(token);
        setAuthState({
            token,
            userInfo: decoded
        });
    };

    const clearAuthInfo = () => setAuthState(null);

    return (
        <AuthContext.Provider value={{ authState, setAuthInfo, clearAuthInfo }}>
            {children}
        </AuthContext.Provider>
    );
};