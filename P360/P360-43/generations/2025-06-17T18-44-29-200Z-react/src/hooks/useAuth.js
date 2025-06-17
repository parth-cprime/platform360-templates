import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Custom hook to access authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        // Ensure hook is used within the provider's scope
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};