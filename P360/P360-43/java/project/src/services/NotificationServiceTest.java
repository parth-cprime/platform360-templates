import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class NotificationServiceTest {

    @Autowired
    private NotificationService notificationService;

    @Test
    public void testCreateNotification() {
        Feedback feedback = new Feedback();
        // TODO: Set feedback properties
        ResponseEntity<?> response = notificationService.createNotification(feedback);
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    public void testHandleException() {
        ResponseEntity<?> response = notificationService.handleException(new Exception("Test exception"));
        assertEquals(response.getStatusCode(), HttpStatus.BAD_REQUEST);
    }
}