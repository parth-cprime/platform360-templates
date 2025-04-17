# Notification System

The notification system is a part of a larger order management API that sends notifications to the customer service team when urgent feedback is submitted. The system was built using React and follows the OWASP Top 10 security controls.

## Authentication

The system uses JSON Web Tokens (JWT) for user authentication. On successful login, the server returns a JWT which is then stored in the browser's localStorage. The token is included in the Authorization header of all subsequent API requests.

## Data Protection

Sensitive data is handled securely throughout the application. Inputs are validated to prevent XSS attacks and other types of input-based vulnerabilities.

## Error Handling

Errors are handled comprehensively throughout the application. When an error occurs, it is logged to the console (or a logging service) and an error notification is displayed to the user.

## Logging

All important events and errors are logged to the console. In a production environment, these logs would be sent to a logging service for further analysis and storage.

## Testing

All components and services are covered by unit tests to ensure they function as expected. Tests are located in the same directory as the component or service they are testing.

## Dependencies

The application uses secure and up-to-date dependencies. All dependencies are regularly audited for vulnerabilities using npm audit or yarn audit.