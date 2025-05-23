package com.company.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service layer to handle data related operations.
 */
@Service
public class DataService {

    // Assuming an EncryptionService is defined elsewhere that handles the encryption logic
    @Autowired
    private EncryptionService encryptionService;

    /**
     * Encrypts the provided data string.
     * @param data The data to encrypt.
     * @return The encrypted data.
     */
    public String encryptData(String data) {
        return encryptionService.encrypt(data);
    }

    /**
     * Decrypts the provided encrypted data string.
     * @param encryptedData The encrypted data to decrypt.
     * @return The decrypted data.
     */
    public String decryptData(String encryptedData) {
        return encryptionService.decrypt(encryptedData);
    }
}