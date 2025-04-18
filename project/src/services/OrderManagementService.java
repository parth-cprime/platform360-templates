package services;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.oauth2.provider.OAuth2Authentication;

/**
 * Order Management Service
 * 
 * This service handles all the operations related to orders.
 */
@RestController
public class OrderManagementService {

    /**
     * This method fetches the order details
     * 
     * @param orderId - Order ID
     * @param auth - Authentication
     * @return - Order details
     */
    @GetMapping("/order/{orderId}")
    public String getOrder(@PathVariable String orderId, OAuth2Authentication auth) {
        // Input validation
        if (orderId == null || orderId.isEmpty()) {
            // Log the error
            System.out.println("Invalid order Id");

            // Throw an exception
            throw new IllegalArgumentException("Order id cannot be null or empty");
        }

        // Check user authorization
        if (!auth.isAuthenticated()) {
            // Log the error
            System.out.println("Unauthorized access");

            // Throw an exception
            throw new SecurityException("User is not authorized to access this resource");
        }

        // Fetch the order details
        String orderDetails = fetchOrderDetails(orderId);

        // Handle sensitive data
        orderDetails = handleSensitiveData(orderDetails);

        return orderDetails;
    }

    /**
     * This method fetches the order details from the database
     * 
     * This is a dummy method for the sake of this example
     * 
     * @param orderId - Order ID
     * @return - Order details
     */
    private String fetchOrderDetails(String orderId) {
        return "Order details for order id: " + orderId;
    }

    /**
     * This method handles sensitive data by masking it
     * 
     * This is a dummy method for the sake of this example
     * 
     * @param data - Data
     * @return - Masked data
     */
    private String handleSensitiveData(String data) {
        return data.replace("order id", "******");
    }
}