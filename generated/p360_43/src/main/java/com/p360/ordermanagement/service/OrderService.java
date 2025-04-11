package com.p360.ordermanagement.service;

import com.p360.ordermanagement.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    Order createOrder(Order order);
    Order getOrderById(Long id);
    Order updateOrder(Long id, Order orderDetails);
    void deleteOrder(Long id);
}