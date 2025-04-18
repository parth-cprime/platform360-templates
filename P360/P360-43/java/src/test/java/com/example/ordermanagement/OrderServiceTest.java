package com.example.ordermanagement;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OrderServiceTest {

    @Test
    void createOrder() {
        OrderService orderService = new OrderService();

        assertDoesNotThrow(() -> {
            orderService.createOrder(new Order());
        });
    }
}