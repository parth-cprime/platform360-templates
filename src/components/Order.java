import javax.validation.constraints.NotNull;

public class Order {

    @NotNull(message = "Order ID is required")
    private String orderId;

    @NotNull(message = "Customer ID is required")
    private String customerId;

    // Other fields, getters and setters...

    // Override equals and hashCode methods as needed
}