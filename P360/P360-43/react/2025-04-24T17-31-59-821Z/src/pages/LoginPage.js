import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';

function LoginPage() {
    const { setAuthInfo } = useContext(AuthContext);

    const handleLogin = async (username, password) => {
        try {
            const response = await apiService.post('/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setAuthInfo(token);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {/* Login form */}
        </div>
    );
}

export default LoginPage;