@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Order name is required")
    @Size(min = 1, max = 100, message = "Order name must be between 1 and 100 characters")
    private String name;

    @NotBlank(message = "Order description is required")
    @Size(min = 1, max = 500, message = "Order description must be between 1 and 500 characters")
    private String description;

    // getters and setters...
}