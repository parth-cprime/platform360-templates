```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ValidationException;

@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(ValidationException ex) {
        ErrorResponse error = new ErrorResponse(
            "Validation Error",
            ex.getMessage(),
            HttpStatus.BAD_REQUEST.value()
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    
    class ErrorResponse {
        private String error;
        private String message;
        private int status;

        // getters and setters
    }
}
```