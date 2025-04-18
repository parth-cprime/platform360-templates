package com.example.ordermanagement;

import javax.validation.constraints.NotNull;

public class Order {

    @NotNull
    private String id;

    @NotNull
    private String customerId;

    // Other fields and corresponding getters and setters
}