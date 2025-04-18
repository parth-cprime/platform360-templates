import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Assertions;

@SpringBootTest
public class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @Test
    public void fetchOrdersTest() {
        String mockAuthorization = "Bearer mock_token";
        List<Order> orders = orderService.fetchOrders(mockAuthorization);
        Assertions.assertNotNull(orders);
    }
}