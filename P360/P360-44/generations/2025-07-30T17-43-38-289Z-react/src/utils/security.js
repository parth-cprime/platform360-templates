import CryptoJS from 'crypto-js';

// Secret key for encryption/decryption stored in environment variables for security
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY;

/**
 * Encrypts data with AES encryption using a secret key.
 * @param {Object} data - The data to encrypt.
 * @returns {string} The encrypted data as a string.
 */
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

/**
 * Decrypts AES encrypted data using a secret key.
 * @param {string} encryptedData - The encrypted data to decrypt.
 * @returns {Object} The decrypted data as an object.
 */
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

/**
 * Validates a JWT token by decoding it and checking its structure.
 * @param {string} token - The JWT token to validate.
 * @returns {Object|null} The decoded token payload if valid, otherwise null.
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