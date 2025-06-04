import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { encryptData } from '../../utils/security';

/**
 * Login component for handling user login process.
 */
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    /**
     * Handles the submission of login form.
     * Encrypts the credentials before sending to the authentication service.
     * @param {Event} e - The event triggered on form submission.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const encryptedCredentials = encryptData(credentials);
            await authService.login(encryptedCredentials);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            // Ideally, display an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                placeholder="Email"
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;