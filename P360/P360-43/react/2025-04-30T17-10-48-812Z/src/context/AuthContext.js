import React, { createContext, useContext, useState } from 'react';
import { authenticateUser } from '../services/authService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const user = await authenticateUser(username, password);
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
    // Further cleanup actions can be added here
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}