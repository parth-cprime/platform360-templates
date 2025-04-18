// Import necessary libraries
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpServletRequest;

import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class NotificationServiceTest {
    @Autowired
    private NotificationService notificationService;

    @Test
    public void testSendNotification() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        request.addParameter("refresh_token", "invalid_token");

        // Test for exception when the user is not authenticated
        assertThrows(RuntimeException.class, () -> notificationService.sendNotification("test feedback", request));
    }

    @Test
    public void testAcknowledgeNotification() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        request.addParameter("refresh_token", "invalid_token");

        // Test for exception when the user is not authenticated
        assertThrows(RuntimeException.class, () -> notificationService.acknowledgeNotification("test_id", request));
    }

    @Test
    public void testGetUrgentFeedback() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        request.addParameter("refresh_token", "invalid_token");

        // Test for exception when the user is not authenticated
        assertThrows(RuntimeException.class, () -> notificationService.getUrgentFeedback(request));
    }
}