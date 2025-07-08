import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { encryptData } from '../utils/security';
import { validateLoginInput } from '../utils/validation';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = validateLoginInput(credentials);
        if (error) {
            setError(error.details[0].message);
            return;
        }
        setError('');
        const encryptedCredentials = encryptData(credentials);
        try {
            await login(encryptedCredentials);
        } catch (loginError) {
            setError('Failed to log in. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>{error}</div>
            <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;