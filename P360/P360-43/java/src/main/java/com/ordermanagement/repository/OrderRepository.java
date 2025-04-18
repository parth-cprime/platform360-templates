package com.ordermanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ordermanagement.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}