import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * A higher-order component that wraps the given component, redirecting to the login
 * page if the user is not authenticated.
 * @param {ReactNode} children - The component to render if the user is authenticated.
 * @returns {ReactNode} The protected route component.
 */
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a more sophisticated loader component
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;