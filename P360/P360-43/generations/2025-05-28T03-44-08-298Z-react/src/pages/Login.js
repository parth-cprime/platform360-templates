import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { encryptData } from '../utils/security';

// Login component with form for email and password
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Encrypt credentials before sending them over the network
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
            />
            <input
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