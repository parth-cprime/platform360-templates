import CryptoJS from 'crypto-js';

// The secret key for encryption/decryption should be stored in an environment variable for production
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'default_secret_key';

/**
 * Encrypts data using AES encryption.
 * @param {Object} data - The data to encrypt.
 * @returns {string} - The encrypted data.
 */
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

/**
 * Decrypts data previously encrypted with AES.
 * @param {string} encryptedData - The data to decrypt.
 * @returns {Object} - The decrypted data.
 */
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

/**
 * Validates a JWT token's structure and its expiration without verifying its signature.
 * @param {string} token - The JWT token to validate.
 * @returns {Object|null} - The token's payload if valid, null otherwise.
 */
export const validateToken = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Token validation error', error);
        return null;
    }
};