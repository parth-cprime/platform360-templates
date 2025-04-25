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
    if (user) {
      setCurrentUser(user);
      // Store JWT token in localStorage or cookies as per security requirement
      localStorage.setItem('token', user.token);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};