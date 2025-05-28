package com.company.repository;

import com.company.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for {@link User} instances.
 * Provides basic CRUD operations due to the extension of {@link JpaRepository}.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query methods can be defined here
}