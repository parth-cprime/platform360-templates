package src.tests;

import src.services.OrderManagementService;
import src.components.Order;
import src.utils.ServiceException;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class OrderManagementServiceTest {

    @Mock
    private OAuth2RestTemplate restTemplate;

    @InjectMocks
    private OrderManagementService service;

    @Test
    public void fetchOrderTest() throws ServiceException {
        Order order = new Order();
        order.setId(1);
        order.setDescription("Test order");

        when(restTemplate.getForObject(anyString(), eq(Order.class))).thenReturn(order);

        Order result = service.fetchOrder(1);

        assertNotNull(result);
        assertEquals(order.getId(), result.getId());
        assertEquals(order.getDescription(), result.getDescription());
    }

    @Test
    public void acknowledgeOrderTest() throws ServiceException {
        doNothing().when(restTemplate).postForEntity(anyString(), eq(null), eq(Void.class));
        service.acknowledgeOrder(1);
        verify(restTemplate, times(1)).postForEntity(anyString(), eq(null), eq(Void.class));
    }
}