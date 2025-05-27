package com.company.controller;

import com.company.model.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    
    // Endpoint for testing protected data access
    @GetMapping("/protected")
    public ResponseEntity<?> getProtectedData() {
        return ResponseEntity.ok(new ApiResponse("Protected data accessed successfully", true));
    }

    // Constructor for dependency injection (if needed)
    // @Autowired
    // public ApiController(YourService service) {
    //     this.service = service;
    // }
}