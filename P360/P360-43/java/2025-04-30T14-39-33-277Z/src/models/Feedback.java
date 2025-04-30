package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String content;
    private String category; // Category can be used to route feedback to the appropriate team member

    public Feedback() {
    }

    public Feedback(String content, String category) {
        this.content = content;
        this.category = category;
    }

    // Getters and setters omitted for brevity
}