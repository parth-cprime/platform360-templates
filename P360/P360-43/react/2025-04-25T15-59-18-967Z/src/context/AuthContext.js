import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token);
            if (user.exp * 1000 < Date.now()) {
                localStorage.removeItem('token');
            } else {
                setCurrentUser(user);
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setCurrentUser(jwtDecode(token));
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};