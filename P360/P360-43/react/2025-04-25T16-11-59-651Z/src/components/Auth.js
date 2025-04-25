import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

// Simple authentication component using JWT for demonstration
const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthToken } = useContext(AuthContext);
    let history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                username,
                password,
            });
            const { token } = response.data;
            setAuthToken(token);
            history.push('/dashboard');
        } catch (error) {
            console.error('Authentication error:', error);
            alert('Login failed!');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Auth;