import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (username, password) => {
        // Assume loginAPI is a function that sends username and password
        // to the backend and returns a JWT token on successful authentication.
        const { token } = await loginAPI(username, password);
        localStorage.setItem('token', token);
        // Ideally, decode the JWT token to get user data
        setCurrentUser({ username });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};