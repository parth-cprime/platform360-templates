package com.company.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataService {
    
    private final EncryptionService encryptionService;

    @Autowired
    public DataService(EncryptionService encryptionService) {
        this.encryptionService = encryptionService;
    }

    // Method to encrypt data
    public String encryptData(String data) {
        return encryptionService.encrypt(data);
    }

    // Method to decrypt data
    public String decryptData(String encryptedData) {
        return encryptionService.decrypt(encryptedData);
    }
}