import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { encryptData } from '../utils/security';

// Login component provides UI for user authentication
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();

    // Handle form submission for login
    const handleSubmit = async (e) => {
        e.preventDefault();
        const encryptedCredentials = encryptData(credentials); // Encrypt credentials before sending
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