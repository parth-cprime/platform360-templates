import React, { createContext, useState } from 'react';
import authService from '../services/authService';

// This context provider is passed to any component requiring the auth state

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(null);

  // On login, we set the state of auth with the user information
  // On logout, we reset the state of auth to null
  const login = async (username, password) => {
    const user = await authService.login(username, password);
    setAuth(user);
  }

  const logout = () => {
    authService.logout();
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;