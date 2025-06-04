import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * A component that wraps around routes that require user authentication.
 * Redirects to the login page if the user is not authenticated.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components to render if authenticated.
 * @returns {JSX.Element} - The rendered component.
 */
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a more sophisticated loader/spinner
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;