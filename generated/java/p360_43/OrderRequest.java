package com.example.order.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderRequest {
    
    @NotBlank
    private String customerName;
    
    @NotNull
    private BigDecimal amount;
    
    // Other fields
}
