# Order Management API

Project Overview:
This project provides an Order Management API. The API includes features like analyzing incoming feedback for urgent keywords or negative sentiment, routing notifications to the appropriate team member based on the feedback category, allowing team members to acknowledge receipt of notifications and providing a simple dashboard showing pending and acknowledged urgent feedback. 

Security Considerations:
The application uses JWT for authentication and has a medium level of security. The data sensitivity is internal, meaning it's only meant for use within the organization. The application follows all standard security best practices like input validation, error handling, logging, etc. 

Authentication Method:
The application uses JWT (Json Web Token) for authentication. The JWT is included in the request header for authenticated routes. 

Data Sensitivity Level:
The data sensitivity level is internal. The data used and produced by this application should not be exposed to the public or unauthorized personnel.

Installation Instructions:
1. Clone the repository
2. Navigate to the project directory
3. Run "mvn install" to install dependencies
4. Create a .env file for environment variables
5. Run "mvn spring-boot:run" to start the application

Security Best Practices Followed:
1. Input validation and sanitization
2. Error handling and logging
3. Secure session management
4. Use of secure communication protocols
5. Least privilege principle
6. Regular security updates
7. Secure defaults and configuration