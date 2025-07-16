import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { encryptData } from '../../utils/security';

/**
 * Represents the login form component.
 * Handles the login process by encrypting credentials and invoking the login function from AuthContext.
 */
const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    /**
     * Handles the form submission, encrypts the credentials, and attempts to log in.
     * @param {Event} e - The submit event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const encryptedCredentials = encryptData(credentials);
            await login(encryptedCredentials);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error: ', error);
            // Implement error handling UI here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;