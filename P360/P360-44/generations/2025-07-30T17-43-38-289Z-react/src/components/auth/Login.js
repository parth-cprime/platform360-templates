import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { encryptData } from '../../utils/security';

/**
 * Login component handles user authentication by encrypting credentials and using
 * the useAuth hook to manage the authentication state and redirection upon successful login.
 */
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();

    /**
     * Handles form submission by encrypting user credentials and attempting to log in.
     * @param {Event} e - The event triggered on form submission.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const encryptedCredentials = encryptData(credentials);
        await login(encryptedCredentials);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                placeholder="Enter your email"
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                placeholder="Enter your password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;