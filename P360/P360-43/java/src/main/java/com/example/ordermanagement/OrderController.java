package com.example.ordermanagement;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;
    private static final Logger LOGGER = Logger.getLogger(OrderController.class.getName());

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Void> createOrder(@Valid @RequestBody Order order) {
        try {
            orderService.createOrder(order);
            LOGGER.info("Order created successfully");
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            LOGGER.severe("Error occurred while creating order: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Other RESTful APIs handling
}