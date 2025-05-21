import React, { createContext, useContext, useState } from 'react';
import { loginUser } from '../services/authService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const user = await loginUser(username, password);
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
    // Implement logout logic, e.g., clearing tokens
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};