import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

// This context provides an interface to authenticate users through JWT.
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);

    // Decodes the JWT and sets the auth state.
    const logIn = (token) => {
        const decodedToken = jwtDecode(token);
        setAuth(decodedToken);
    };

    // Clears the auth state.
    const logOut = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}