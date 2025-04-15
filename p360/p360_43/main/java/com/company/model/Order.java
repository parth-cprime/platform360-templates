@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String product;

    @Min(value = 1)
    private Integer quantity;

    @NotNull
    private BigDecimal price;

    // getters and setters
}