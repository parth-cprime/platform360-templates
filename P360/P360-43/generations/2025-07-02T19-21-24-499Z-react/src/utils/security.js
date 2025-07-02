import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

/**
 * Encrypts data using AES encryption with a secret key.
 * @param {Object} data - The data to encrypt.
 * @returns {string} The encrypted data.
 */
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

/**
 * Decrypts data encrypted with AES.
 * @param {string} encryptedData - The data to decrypt.
 * @returns {Object} The decrypted data.
 */
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

/**
 * Validates a JWT token's structure and expiration without verifying its signature.
 * Signature verification should be done server-side for security.
 * @param {string} token - The JWT token to validate.
 * @returns {Object|null} The payload if valid, or null if invalid.
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