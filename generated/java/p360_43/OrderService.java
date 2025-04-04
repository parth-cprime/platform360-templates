package com.example.order.service;

import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderResponse;
import com.example.order.entity.Order;
import com.example.order.exception.OrderNotFoundException;
import com.example.order.mapper.OrderMapper;
import com.example.order.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class OrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrderService.class);

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    @Autowired
    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
    }
    
    public OrderResponse createOrder(OrderRequest orderRequest) {
        Order order = orderMapper.toEntity(orderRequest);
        order.setCreatedAt(LocalDateTime.now());
        order.setUpdatedAt(LocalDateTime.now());

        Order savedOrder = orderRepository.save(order);
        LOGGER.info("Order created with id: {}", savedOrder.getId());

        return orderMapper.toDto(savedOrder);
    }

    public OrderResponse getOrder(Long id) {
        Order order = findOrderById(id);
        return orderMapper.toDto(order);
    }
    
    public OrderResponse updateOrder(Long id, OrderRequest orderRequest) {
        Order order = findOrderById(id);
        orderMapper.updateEntity(orderRequest, order);
        order.setUpdatedAt(LocalDateTime.now());

        Order updatedOrder = orderRepository.save(order);
        LOGGER.info("Order updated with id: {}", updatedOrder.getId());

        return orderMapper.toDto(updatedOrder);
    }

    public void deleteOrder(Long id) {
        Order order = findOrderById(id);
        orderRepository.delete(order);
        LOGGER.info("Order deleted with id: {}", id);
    }
    
    private Order findOrderById(Long id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        return optionalOrder.orElseThrow(() -> {
            LOGGER.error("Order not found with id: {}", id);
            return new OrderNotFoundException("Order not found with id: " + id);
        });
    }
}
