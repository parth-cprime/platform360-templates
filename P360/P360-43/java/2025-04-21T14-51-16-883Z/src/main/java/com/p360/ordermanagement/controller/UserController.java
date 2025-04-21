```java
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @PostMapping("/users")
    public ResponseEntity<?> createUser(@Validated @RequestBody UserDTO userDTO) {
        // Implementation
        return null;
    }
}

class UserDTO {
    private String username;
    private String password;
    private String email;

    // getters and setters
}
```