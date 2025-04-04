package com.example.order.mapper;

import com.example.order.dto.OrderRequest;
import com.example.order.dto.OrderResponse;
import com.example.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    Order toEntity(OrderRequest orderRequest);

    OrderResponse toDto(Order order);

    void updateEntity(OrderRequest orderRequest, @MappingTarget Order order);
}
