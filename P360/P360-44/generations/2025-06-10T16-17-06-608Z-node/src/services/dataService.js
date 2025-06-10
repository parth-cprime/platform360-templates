// Service layer with data encryption
const crypto = require('crypto');
const config = require('../config/security');
const { EncryptionError } = require('../utils/errors');

class DataService {
    encryptData(data) {
        try {
            const cipher = crypto.createCipher('aes-256-cbc', config.encryptionKey);
            let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return encrypted;
        } catch (error) {
            throw new EncryptionError('Data encryption failed.');
        }
    }

    decryptData(encryptedData) {
        try {
            const decipher = crypto.createDecipher('aes-256-cbc', config.encryptionKey);
            let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return JSON.parse(decrypted);
        } catch (error) {
            throw new EncryptionError('Data decryption failed.');
        }
    }
}

module.exports = new DataService();