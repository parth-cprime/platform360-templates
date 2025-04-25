import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    // Placeholder for authentication logic
    // Normally, you'd call an API to authenticate the user and get a JWT token back
    const token = 'mockToken'; // This should be replaced with actual token received from the backend
    localStorage.setItem('token', token);
    setCurrentUser({ username, token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}