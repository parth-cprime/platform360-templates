package services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    // This method should be modified to load user details from your database
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // For demonstration purposes, returning a hardcoded user. Replace with database lookup.
        return User
                .withUsername("user")
                .password("$2a$10$W3.U0ERjzcr9u9QD8LjVeuJ7tk/5sX9.5QFtL4h8t3Q2N5sZ1WH6e") // password encoded as "password"
                .authorities("USER")
                .build();
    }
}