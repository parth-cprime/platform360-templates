# Customer Feedback Notification System

This project implements a notification system that alerts customer service team members when urgent customer feedback is submitted through a web form. It provides an API for managing customer feedback and sending notifications to the appropriate team members.

## Folder Structure

- `src/` - Contains the main source code files
  - `controllers/` - Defines the API route handlers
  - `services/` - Contains the business logic and external integrations 
  - `models/` - Defines the data models and schemas
  - `middleware/` - Contains custom middleware functions
  - `config/` - Holds configuration files
  - `utils/` - Provides utility functions
- `tests/` - Contains unit and integration tests
- `package.json` - Specifies project dependencies and scripts
- `.env` - Defines environment variables (not committed to VCS)

## Key Components

- `FeedbackController` - Handles API routes related to customer feedback
- `NotificationService` - Manages sending notifications to team members
- `FeedbackModel` - Defines the schema for customer feedback data
- `authMiddleware` - Implements JWT authentication
- `validationMiddleware` - Performs input validation
- `errorMiddleware` - Handles errors and sends appropriate responses

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Run the application: `npm start`
5. Access the API at `http://localhost:3000`

## Security Considerations

- API endpoints are protected with JWT authentication
- Input validation is performed on all requests
- Error handling middleware sends generic error messages to client
- CORS is configured to allow only trusted origins
- Content Security Policy headers are set using helmet
- Rate limiting middleware prevents excessive requests
- Sensitive data is hashed before storing in database