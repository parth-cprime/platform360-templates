import CryptoJS from 'crypto-js';

// Encrypt and decrypt utility functions using environment variable for key
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

export const encryptData = (data) => {
    // Encrypt data function using AES
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encryptedData) => {
    // Decrypt data function
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const validateToken = (token) => {
    try {
        // Decode JWT to validate
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};