# Order Management API
This is a secure Order Management API developed in Java using Spring Boot. It has the ability to fetch orders, add orders, update orders and delete orders. 

## Security Considerations
1. JWT token-based authentication is implemented. 
2. Input data is validated.
3. Error handling is done properly.
4. Proper logging is implemented to track any potential security threats.
5. Data is encrypted while in transit and at rest.

## Authentication Method
The application uses JWT token-based authentication. Users are provided with a JWT token during the login process which is used for subsequent requests.

## Data Sensitivity Level
The data sensitivity level is internal. The data is not shared with third-party services or exposed publicly.

## Installation Instructions
1. Clone the repository
2. Set up the database and update the application properties file with the correct database credentials
3. Build the project using Maven: `mvn clean install`
4. Run the application: `java -jar target/order-management-api.jar`
5. The application will be running at http://localhost:8080

## Security Best Practices Followed
1. Secure defaults are used.
2. Error messages do not expose sensitive information.
3. All input data is validated and sanitized.
4. JWT token-based authentication is used.
5. Sensitive data is encrypted.
6. Principle of least privilege is followed.
7. Passwords are hashed before being stored in the database.
8. Security headers are included in responses.