import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

// Create the authentication context
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (token && refreshToken) {
      const decodedToken = jwtDecode(token);
      const expiresAt = new Date(decodedToken.exp * 1000);

      if (new Date() > expiresAt) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return { user: null };
      } else {
        return { user: decodedToken };
      }
    } else {
      return { user: null };
    }
  });

  // Function to set authentication state
  const setAuthInfo = ({ token, refreshToken }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);

    const decodedToken = jwtDecode(token);
    setAuthState({ user: decodedToken });
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        setAuthInfo: setAuthInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}