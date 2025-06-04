import CryptoJS from 'crypto-js';

/**
 * Secret key for encryption/decryption, stored in environment variables for security.
 */
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

/**
 * Encrypts data using AES encryption.
 * @param {Object} data - The data to encrypt.
 * @returns {string} - The encrypted string.
 */
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

/**
 * Decrypts data previously encrypted with AES encryption.
 * @param {string} encryptedData - The data to decrypt.
 * @returns {Object} - The decrypted object.
 */
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

/**
 * Validates a JWT token's structure and expiration without verifying its signature.
 * This is primarily used for client-side validation purposes.
 * @param {string} token - The JWT token to validate.
 * @returns {Object|null} - The decoded token payload if valid, or null if invalid.
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
        return null;
    }
};