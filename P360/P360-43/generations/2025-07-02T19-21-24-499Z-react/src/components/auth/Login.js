import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { encryptData } from '../../utils/security';

/**
 * Login form component for authentication.
 * Utilizes encryptData utility to secure credentials before sending.
 */
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const encryptedCredentials = encryptData(credentials);
            await login(encryptedCredentials);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            // Implement more sophisticated error handling here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;