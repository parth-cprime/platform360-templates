package src.services;

import src.components.Order;
import src.utils.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Service;

@Service
public class OrderManagementService {

    @Autowired
    private OAuth2RestTemplate restTemplate;

    // Method to fetch orders
    public Order fetchOrder(Integer id) throws ServiceException {
        try {
            return restTemplate.getForObject("/api/order/" + id, Order.class);
        } catch (Exception ex) {
            throw new ServiceException("Error fetching order", ex);
        }
    }

    // Method to acknowledge receipt of order
    public void acknowledgeOrder(Integer id) throws ServiceException {
        try {
            restTemplate.postForEntity("/api/order/acknowledge/" + id, null, Void.class);
        } catch (Exception ex) {
            throw new ServiceException("Error acknowledging order", ex);
        }
    }
}