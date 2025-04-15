```java
@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
    
    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public ResponseEntity<List<Notification>> getAllNotifications() {
        List<Notification> notifications = notificationService.getAllNotifications();
        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createNotification(@Valid @RequestBody NotificationDTO notificationDTO) {
        Notification notification = notificationService.createNotification(notificationDTO);
        return new ResponseEntity<>(notification, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/acknowledge")
    public ResponseEntity<?> acknowledgeNotification(@PathVariable Long id) {
        notificationService.acknowledgeNotification(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
```