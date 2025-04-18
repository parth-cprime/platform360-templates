package com.example.ordermanagement;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        // Add your business logic here
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        // Add your business logic here
        return orderRepository.findAll();
    }

    public Order getOrderById(Long orderId) {
        // Add your business logic here
        return orderRepository.findById(orderId);
    }

    public Order updateOrder(Long orderId, Order orderDetails) {
        // Add your business logic here
        return orderRepository.save(orderDetails);
    }

    public void deleteOrder(Long orderId) {
        // Add your business logic here
        orderRepository.deleteById(orderId);
    }
}