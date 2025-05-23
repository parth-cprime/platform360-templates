import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Placeholder for login function
  const login = (token) => {
    setCurrentUser({ token });
    // Additional steps to verify and store the JWT token would be implemented here
  };

  const value = {
    currentUser,
    login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}