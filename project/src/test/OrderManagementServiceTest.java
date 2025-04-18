package test;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import services.OrderManagementService;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Order Management Service Test
 * 
 * This class tests the Order Management Service
 */
public class OrderManagementServiceTest {

    /**
     * This test method tests the getOrder method of the OrderManagementService class
     */
    @Test
    public void testGetOrder() {
        // Initialize OrderManagementService
        OrderManagementService orderManagementService = new OrderManagementService();

        // Initialize OAuth2Authentication
        OAuth2Authentication auth = new OAuth2Authentication();

        // Validate the getOrder method
        assertThrows(IllegalArgumentException.class, () -> orderManagementService.getOrder(null, auth));
        assertThrows(IllegalArgumentException.class, () -> orderManagementService.getOrder("", auth));
        assertThrows(SecurityException.class, () -> orderManagementService.getOrder("123", auth));
        auth.setAuthenticated(true);
        assertEquals("Order details for order id: 123", orderManagementService.getOrder("123", auth));
    }
}