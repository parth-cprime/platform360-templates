/**
 * Auth Context.
 * This context will provide user state and functions to children components
 */

import React, { createContext, useState, useEffect } from 'react';
import { AuthService } from '../services/authService';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authService = new AuthService();

  const login = async (username, password) => {
    const { user, token } = await authService.login(username, password);
    setUser(user);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    // Check if user is already authenticated from a previous session
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and set user state
      // ...validation logic here...
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;