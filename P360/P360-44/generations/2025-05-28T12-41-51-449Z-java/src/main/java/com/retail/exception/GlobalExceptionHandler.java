package com.company.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {CustomException.class})
    protected ResponseEntity<Object> handleConflict(RuntimeException ex) {
        // Construct and return an appropriate error response object
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }

    // Additional exception handlers can be added here
}