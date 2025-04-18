import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import org.springframework.security.oauth2.client.OAuth2RestTemplate;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class OrderManagementServiceTest {

    @Mock
    private OAuth2RestTemplate restTemplate;

    @InjectMocks
    private OrderManagementService service;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testProcessOrder_error() {
        // Given
        Order order = new Order();
        doThrow(new RuntimeException("Test")).when(restTemplate).postForEntity(anyString(), any(), any());

        // When
        assertThrows(ServiceException.class, () -> service.processOrder(order));

        // Then
        verify(restTemplate).postForEntity(anyString(), eq(order), eq(Void.class));
    }
}