import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { encryptData } from '../utils/security';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Encrypt credentials before sending to the server
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