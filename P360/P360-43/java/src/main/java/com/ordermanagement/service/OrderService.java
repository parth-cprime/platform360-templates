package com.ordermanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ordermanagement.model.Order;
import com.ordermanagement.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    /**
     * Create a new order
     * @param order
     * @return Order
     */
    public Order createOrder(Order order) {
        // insert the order into the repository and return the saved order
        return orderRepository.save(order);
    }

    //... other CRUD operations
}