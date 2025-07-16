import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Custom hook to access auth context data
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        // Ensure this hook is used within an AuthProvider
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};