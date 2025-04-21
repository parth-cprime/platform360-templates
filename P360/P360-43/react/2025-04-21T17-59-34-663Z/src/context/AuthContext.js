import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for authentication
export const AuthContext = createContext();

// Provide the context to components
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get('/api/checkToken');
        setUser(res.data.user);
        setLoading(false);
      } catch (error) {
        console.error('Failed to check login status', error);
        setLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};