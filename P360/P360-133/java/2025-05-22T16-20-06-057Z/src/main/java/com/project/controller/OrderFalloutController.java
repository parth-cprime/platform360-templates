package com.project.controller;

import com.project.model.OrderFallout;
import com.project.service.OrderFalloutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/private/order-fallouts")
public class OrderFalloutController {

    @Autowired
    private OrderFalloutService orderFalloutService;

    @GetMapping
    public ResponseEntity<?> getAllOrderFallouts() {
        try {
            return ResponseEntity.ok(orderFalloutService.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error retrieving data: " + e.getMessage());
        }
    }
}