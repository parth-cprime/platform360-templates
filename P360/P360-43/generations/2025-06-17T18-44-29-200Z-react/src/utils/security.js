import CryptoJS from 'crypto-js';

// Encryption key from environment variables for securing sensitive data
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

// Encrypt data using AES encryption
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt data encrypted with AES encryption
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Validate JWT token structure without verifying its signature
export const validateToken = (token) => {
    try {
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