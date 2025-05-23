package com.company.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/protected")
    public ResponseEntity<?> getProtectedData() {
        // Assuming this method is for demonstration purposes
        return ResponseEntity.ok("Protected data accessed successfully");
    }
}