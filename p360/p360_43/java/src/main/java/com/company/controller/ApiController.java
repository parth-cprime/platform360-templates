@RestController
@RequestMapping("/api")
public class ApiController {
    
    @GetMapping("/protected")
    public ResponseEntity<?> getProtectedData() {
        return ResponseEntity.ok(new ApiResponse("Protected data accessed successfully"));
    }
}