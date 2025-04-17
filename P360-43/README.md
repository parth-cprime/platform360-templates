# Generated Code

## Task Details
- Task ID: P360-43
- Language: react
- Generated: 2025-04-17T20:07:08.836Z

## Parameters
- Security Level: medium
- Auth Method: jwt
- Data Sensitivity: internal

## Generated Files
- src/components/NotificationComponent.jsx
- src/services/authService.js
- src/utils/errorHandler.js
- src/utils/logger.js
- src/hooks/useAuth.js
- src/services/notificationService.js
- README.md

## Prompt
```
Generate react code for the following task:

Task ID: P360-43
Summary: P360 sample business requirement task
Description: Create a order management API where itBackground

The customer service team currently receives feedback through a web form, but has no automated way to be notified when urgent issues are reported. Team members must regularly check the system, causing delays in addressing time-sensitive customer concerns.

h2. Business Requirement

Create a notification system that alerts the appropriate customer service team member when customer feedback requiring immediate attention is submitted.

h2. Key Features

# Automatically analyze incoming feedback for urgent keywords or negative sentiment
# Route notifications to the appropriate team member based on the feedback category
# Allow team members to acknowledge receipt of notifications
# Provide a simple dashboard showing pending and acknowledged urgent feedback

h2. Success Criteria

* Urgent feedback notifications are sent within 2 minutes of submission
* Team members acknowledge receipt of 95% of urgent notifications within 15 minutes during business hours
* Customer satisfaction for urgent issues improves by 10% within three months is fetching 
Security Level: medium
Authentication Method: jwt
Data Sensitivity: internal


# react Project Structure

## Project Structure
```
project/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── hooks/            # Custom hooks
│   ├── context/          # Context providers
│   ├── utils/            # Utility functions
│   ├── assets/           # Static assets
│   └── App.js            # Main application
├── public/               # Public files
├── package.json          # Project dependencies
└── README.md            # Project documentation
```


# React Security Code Generation Prompt

## Security Requirements
- Implement OWASP Top 10 security controls
- Follow React security best practices
- Use secure dependencies and configurations
- Implement proper authentication and authorization
- Handle sensitive data securely

## Input Parameters
- Application Type: {{appType}}
- Security Level: {{securityLevel}}
- Authentication Method: {{authMethod}}
- Data Sensitivity: {{dataSensitivity}}

## Security Controls
1. Input Validation
2. Authentication
3. Authorization
4. Session Management
5. Data Protection
6. Error Handling
7. Logging
8. API Security
9. Dependency Security
10. Infrastructure Security

## Expected Output
- Secure code implementation
- Security configuration
- Security documentation
- Security testing plan


Requirements:
1. Follow the highest security standards based on security level (medium)
2. Implement appropriate data protection based on sensitivity (internal)
3. Use proper authentication method (jwt)
4. Include comprehensive error handling
5. Add detailed logging
6. Write clear documentation
7. Include unit tests
8. Follow react best practices

Format your response with clear file paths and code blocks:
```
path/to/file.ext
```
```react
// Code here
```
```
