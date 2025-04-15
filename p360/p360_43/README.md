# Order Management API Project Overview
This project consists of an Order Management API that receives and processes customer feedback in an automated fashion. It includes features such as automatic analysis of feedback for urgent keywords or negative sentiment, routing notifications to the appropriate team member, allowing team members to acknowledge receipt of notifications, and a simple dashboard showing pending and acknowledged urgent feedback.

## Security Considerations
The project has been developed with high-level security considerations to ensure the confidentiality, integrity, and availability of customer feedback data. It uses OAuth for authentication and authorization, and all the data is internal and treated with high sensitivity.

## Authentication Method
OAuth is used as the authentication method in this project. OAuth provides a secure and robust method for the application to access data on behalf of a user without needing to know the user's credentials.

## Data Sensitivity Level
The data sensitivity level for this project is internal. All the customer feedback data that the application handles is highly sensitive and must be protected accordingly.

## Installation Instructions
To install and run the project:
1. Clone the repository
2. Navigate to the project directory
3. Run `mvn clean install` to build the project
4. Run `java -jar target/order-management-api.jar` to start the application

## Security Best Practices Followed
1. Secure coding practices have been followed to minimize vulnerabilities and bugs.
2. Data encryption is used to protect sensitive data.
3. All input is validated to prevent SQL injection and XSS attacks.
4. Error messages are carefully managed to avoid revealing sensitive system information.
5. Regular security updates and patches are applied to keep the system secure.