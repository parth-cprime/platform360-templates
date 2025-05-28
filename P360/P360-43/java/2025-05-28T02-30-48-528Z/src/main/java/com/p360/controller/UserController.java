package com.company.controller;

import com.company.model.dto.UserDTO;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Controller responsible for user related operations.
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Endpoint to create a new user.
     * @param userDTO Data transfer object containing user details.
     * @return A response entity confirming the user creation.
     */
    @PostMapping("/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO userDTO) {
        userService.createUser(userDTO);
        return ResponseEntity.ok("User created successfully");
    }
}