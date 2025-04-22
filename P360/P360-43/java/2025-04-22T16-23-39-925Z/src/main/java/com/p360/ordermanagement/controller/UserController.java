```java
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@RestController
public class UserController {
    
    @PostMapping("/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO userDTO) {
        // Implementation
        return ResponseEntity.ok().build();
    }
}

@Validated
class UserDTO {
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters")
    private String username;
    
    @NotBlank(message = "Password is required")
    @Pattern(regexp = "^[a-zA-Z0-9]{3,30}$", message = "Password must be alphanumeric and between 3 to 30 characters")
    private String password;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be a valid format")
    private String email;
}
```