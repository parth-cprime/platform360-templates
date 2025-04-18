import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;

import java.util.logging.Logger;

@Service
public class OrderManagementService {

    private static final Logger LOGGER = Logger.getLogger(OrderManagementService.class.getName());

    private final OAuth2RestTemplate restTemplate;

    @Autowired
    public OrderManagementService(OAuth2ProtectedResourceDetails resourceDetails) {
        this.restTemplate = new OAuth2RestTemplate(resourceDetails);
    }

    public void processOrder(Order order) {
        try {
            restTemplate.postForEntity("/api/orders", order, Void.class);
            LOGGER.info("Order processed");
        } catch (Exception e) {
            LOGGER.severe("Error processing order: " + e.getMessage());
            throw new ServiceException("Error processing order", e);
        }
    }
}