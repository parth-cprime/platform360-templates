import CryptoJS from 'crypto-js';

// Encryption key from environment variables
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

// Function to encrypt data using AES
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Function to decrypt data encrypted by the above function
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Validate JWT tokens by decoding them
export const validateToken = (token) => {
    try {
        // Decode the JWT token without verifying to extract the payload
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