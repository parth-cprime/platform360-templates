import { useState, useEffect } from 'react';
import * as authService from '../services/authService';

/**
 * Custom hook for managing user authentication
 * @returns {{isLoading: boolean, user: {username: string}}}
 */
export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = authService.decodeToken();
    if (token) {
      setUser({ username: token.username });
    }
    setIsLoading(false);
  }, []);

  return { isLoading, user };
};