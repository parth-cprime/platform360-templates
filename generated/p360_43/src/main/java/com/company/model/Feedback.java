@Entity
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank
    private String content;

    @Enumerated(EnumType.STRING)
    private FeedbackType type;

    @Enumerated(EnumType.STRING)
    private FeedbackStatus status;
}