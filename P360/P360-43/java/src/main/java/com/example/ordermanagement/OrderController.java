package com.example.ordermanagement;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Create a new order
    @PostMapping("")
    public ResponseEntity<Order> createOrder(@Valid @RequestBody Order order) {
        return ResponseEntity.ok(orderService.createOrder(order));
    }

    // Fetch all orders
    @GetMapping("")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // Fetch a single order by id
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable(value = "id") Long orderId) {
        return ResponseEntity.ok(orderService.getOrderById(orderId));
    }

    // Update an order by id
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") Long orderId, 
                                             @Valid @RequestBody Order orderDetails) {
        return ResponseEntity.ok(orderService.updateOrder(orderId, orderDetails));
    }

    // Delete an order by id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable(value = "id") Long orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.ok().build();
    }
}