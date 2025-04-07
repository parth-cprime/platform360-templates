# Java Project Structure Template

## Project Structure
```
project/
├── src/main/java/
│   └── com/company/
│       ├── controller/     # REST controllers
│       │   ├── AuthController.java
│       │   ├── UserController.java
│       │   └── ApiController.java
│       ├── model/         # Data models
│       │   ├── User.java
│       │   ├── Role.java
│       │   └── dto/
│       ├── service/       # Business logic
│       │   ├── AuthService.java
│       │   ├── UserService.java
│       │   └── DataService.java
│       ├── repository/    # Data access
│       │   ├── UserRepository.java
│       │   └── RoleRepository.java
│       ├── config/        # Configuration
│       │   ├── SecurityConfig.java
│       │   └── WebConfig.java
│       ├── security/      # Security components
│       │   ├── JwtTokenProvider.java
│       │   └── SecurityConstants.java
│       └── exception/     # Exception handling
│           ├── GlobalExceptionHandler.java
│           └── CustomException.java
├── src/main/resources/    # Configuration files
│   ├── application.properties
│   └── application-security.properties
├── src/test/java/         # Test files
│   ├── controller/
│   ├── service/
│   └── security/
├── pom.xml                # Project dependencies
└── README.md             # Project documentation
```

## Required Files

### 1. src/main/java/com/company/config/SecurityConfig.java
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/public/**").permitAll()
            .antMatchers("/api/**").authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 2. src/main/java/com/company/security/JwtTokenProvider.java
```java
@Component
public class JwtTokenProvider {
    
    private final String jwtSecret;
    private final long jwtExpirationInMs;

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities());
        
        return Jwts.builder()
            .setClaims(claims)
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs))
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
}
```

### 3. src/main/java/com/company/controller/ApiController.java
```java
@RestController
@RequestMapping("/api")
public class ApiController {
    
    @GetMapping("/protected")
    public ResponseEntity<?> getProtectedData() {
        return ResponseEntity.ok(new ApiResponse("Protected data accessed successfully"));
    }
}
```

### 4. src/main/java/com/company/service/DataService.java
```java
@Service
public class DataService {
    
    @Autowired
    private EncryptionService encryptionService;

    public String encryptData(String data) {
        return encryptionService.encrypt(data);
    }

    public String decryptData(String encryptedData) {
        return encryptionService.decrypt(encryptedData);
    }
}
```

### 5. src/main/java/com/company/exception/GlobalExceptionHandler.java
```java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(ValidationException ex) {
        ErrorResponse error = new ErrorResponse(
            "Validation Error",
            ex.getMessage(),
            HttpStatus.BAD_REQUEST
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handleAuthenticationException(AuthenticationException ex) {
        ErrorResponse error = new ErrorResponse(
            "Authentication Error",
            ex.getMessage(),
            HttpStatus.UNAUTHORIZED
        );
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }
}
```

### 6. src/main/resources/application.properties
```properties
# Security properties
jwt.secret=${JWT_SECRET}
jwt.expirationInMs=86400000

# Database properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# Logging
logging.level.org.springframework.security=DEBUG
```

## Dependencies (pom.xml)
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

## Security Considerations
1. Implement proper JWT token validation
2. Use Spring Security for authentication
3. Enable CORS with proper configuration
4. Implement rate limiting
5. Use security headers
6. Encrypt sensitive data
7. Implement proper error handling
8. Use secure session management
9. Validate all input data
10. Implement proper logging

## Best Practices
1. Follow Spring Security best practices
2. Use environment variables for sensitive data
3. Implement proper error handling
4. Use proper validation annotations
5. Implement comprehensive testing
6. Use proper logging
7. Follow the principle of least privilege
8. Implement proper session management
9. Use secure communication protocols
10. Regular security updates 