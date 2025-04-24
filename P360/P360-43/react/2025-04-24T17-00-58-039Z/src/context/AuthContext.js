// import necessary libraries and components
import React, { createContext, useState, useEffect } from 'react';
import { decodeToken, isExpired } from 'react-jwt';
import axios from 'axios';

// create authentication context
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isExpired(token)) {
      setCurrentUser(decodeToken(token));
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('/api/login', {username, password});
    localStorage.setItem('token', response.data.token);
    setCurrentUser(decodeToken(response.data.token));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};