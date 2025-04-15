# Order Management API with Notification System

## Project Overview
This project provides an API for order management with an integrated notification system. When urgent customer feedback is submitted, the system will automatically analyze the feedback for urgency and sentiment. It will route notifications to the appropriate team member and provide a dashboard to show pending and acknowledged feedback.

## Security Considerations
The system is designed with a medium level of security. It uses JSON Web Tokens (JWT) for authentication and protects internal data.

## Authentication Method
The system uses JWT for authentication. When a user logs in, they are given a token which must be included in the header of their requests to access protected routes.

## Data Sensitivity Level
The system manages internal data. While it is not public, it does not include highly sensitive data like financial or personal information. However, all data is treated with care and protected.

## Installation Instructions
1. Clone this repository.
2. Install dependencies with `mvn install`.
3. Run the application with `mvn spring-boot:run`.
4. You can now access the API at `localhost:8080`.

## Security Best Practices Followed
1. JWT for secure authentication.
2. Input validation to prevent injection attacks.
3. Encryption of sensitive data.
4. Proper error handling to avoid information leakage.
5. Use of HTTPS for secure communication.
6. Regular updates to dependencies to avoid known vulnerabilities.
7. Rate limiting to prevent brute force attacks.
8. Logging for security relevant events.
9. Least privilege principle was followed in giving access permissions.