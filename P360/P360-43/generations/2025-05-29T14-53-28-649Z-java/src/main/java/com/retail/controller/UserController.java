package com.company.controller;

import com.company.model.dto.UserDTO;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Handles user management operations such as creating a new user and user authentication.
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Creates a new user with the provided details.
     * 
     * @param userDTO The data transfer object containing user details.
     * @return A response entity indicating the result of the operation.
     */
    @PostMapping("/")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createUser(userDTO));
    }
}