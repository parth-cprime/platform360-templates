import { useState, useEffect } from 'react';
import { getCurrentUser, isAuthenticated } from '../services/authService';

// Custom hook to manage and provide user authentication status
const useAuth = () => {
  const [auth, setAuth] = useState({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const user = getCurrentUser();
    setAuth({
      user: user,
      isAuthenticated: isAuthenticated(),
    });
  }, []);

  return auth;
};

export default useAuth;