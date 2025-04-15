import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataService {

    @Autowired
    private EncryptionService encryptionService;

    public String encryptData(String data) {
        return encryptionService.encrypt(data);
    }

    public String decryptData(String encryptedData) {
        return encryptionService.decrypt(encryptedData);
    }
}