import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import jwtDecode from 'jwt-decode';

const Auth = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { setAuthData } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', credentials);
            const decoded = jwtDecode(response.data.token);
            setAuthData(decoded);
            localStorage.setItem('authToken', response.data.token);
        } catch (error) {
            console.error('Authentication error:', error);
            // Handle authentication errors appropriately
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Auth;