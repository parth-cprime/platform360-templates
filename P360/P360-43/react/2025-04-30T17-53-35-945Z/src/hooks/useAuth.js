import { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';

// Custom hook to manage authentication state
export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getCurrentUser();
        setUser(user);
    }, []);

    return user;
};