import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

// Create the context
export const AuthContext = createContext();

/**
 * The AuthContextProvider provides an authentication context to the whole application.
 * This context manages the authentication state and provides functions for login and logout.
 * It uses JSON Web Token (JWT) for authentication.
 */
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('jwtToken');
            } else {
                setUser(decodedToken);
            }
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('jwtToken', userData.token);
        setUser(jwtDecode(userData.token));
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};