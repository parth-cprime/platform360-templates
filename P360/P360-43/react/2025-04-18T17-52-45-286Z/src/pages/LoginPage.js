import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/authService';

/**
 * LoginPage is a page component that provides a form for users to log in.
 * It uses the AuthContext to manage the authentication state.
 */
const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser(username, password);
            login(userData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;