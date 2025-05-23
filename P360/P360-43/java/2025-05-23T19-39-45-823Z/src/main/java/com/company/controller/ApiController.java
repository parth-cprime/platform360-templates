package com.company.controller;

import com.company.model.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing API related operations.
 */
@RestController
@RequestMapping("/api")
public class ApiController {

    /**
     * Endpoint to access protected data.
     * @return ResponseEntity with protected data.
     */
    @GetMapping("/protected")
    public ResponseEntity<?> getProtectedData() {
        return ResponseEntity.ok(new ApiResponse("Protected data accessed successfully", true));
    }
}