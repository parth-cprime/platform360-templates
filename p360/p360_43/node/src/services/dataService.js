// Service layer with data encryption
const crypto = require('crypto');
const config = require('../config/security');

class DataService {
    encryptData(data) {
        const cipher = crypto.createCipher('aes-256-cbc', config.encryptionKey);
        let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decryptData(encryptedData) {
        const decipher = crypto.createDecipher('aes-256-cbc', config.encryptionKey);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }
}

module.exports = new DataService();