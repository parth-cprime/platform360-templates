package com.ordermanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ordermanagement.model.Order;
import com.ordermanagement.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * Create a new order
     * @param order
     * @return ResponseEntity<Order>
     */
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        try {
            Order savedOrder = orderService.createOrder(order);
            return ResponseEntity.ok(savedOrder);
        } catch (Exception e) {
            // log the error
            System.out.println(e.getMessage());
            return ResponseEntity.status(500).build();
        }
    }

    //... other CRUD operations
}