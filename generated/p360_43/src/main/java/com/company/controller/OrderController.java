@RestController
@RequestMapping("/api/order")
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @PostMapping("/feedback")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> submitFeedback(@Valid @RequestBody FeedbackDTO feedbackDTO) {
        // Implementation
    }

    @GetMapping("/notifications")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> getNotifications() {
        // Implementation
    }
}