# Order Management API

## Business Requirements
### Task Overview
- **Task ID**: P360-43
- **Priority**: Medium
- **Status**: To Do

### Requirements
Create a order management API where it is fetching the customer's feedback and analyse them for any possible urgent issues. The customer service team currently receives feedback through a web form, but has no automated way to be notified when urgent issues are reported. Team members must regularly check the system, causing delays in addressing time-sensitive customer concerns.

### Key Features
- Automatically analyze incoming feedback for urgent keywords or negative sentiment
- Route notifications to the appropriate team member based on the feedback category
- Allow team members to acknowledge receipt of notifications
- Provide a simple dashboard showing pending and acknowledged urgent feedback

### Success Criteria
- Urgent feedback notifications are sent within 2 minutes of submission
- Team members acknowledge receipt of 95% of urgent notifications within 15 minutes during business hours
- Customer satisfaction for urgent issues improves by 10% within three months is fetching 

## Overview
This project is aimed at creating a Order Management API that is capable of analyzing incoming customer feedback for any urgent issues and notifying the appropriate team member based on the feedback category. It also allows team members to acknowledge receipt of notifications and provides a simple dashboard showing pending and acknowledged urgent feedback.

## Technical Stack
- Programming Language: React
- Frameworks: React Router Dom, Axios, Crypto-JS
- Database: Not applicable
- External Services: JWT for Authentication

## Architecture
The project uses a component-based architecture with a focus on reusability and separation of concerns. The key components include authentication, layout, common components, pages, services, hooks, context, and utilities. The AuthContext.js file is used to manage user authentication state, and the api.js file is used to handle API requests.

## Setup and Installation
### Prerequisites
- Node.js (LTS version)
- npm (comes bundled with Node.js)

### Installation Steps
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`

### Configuration
- Set up environment variables for API URL and encryption key in a `.env` file

## Development
### Building the Project
There is no separate build process as the project is bootstrapped with Create React App.

### Running the Project
```bash
npm start
```

### Testing
Run `npm test` for running the tests.

## Deployment
### Prerequisites
- A server with Node.js installed
- Access to the command line

### Deployment Steps
1. Push the code to a git repository
2. On your server, clone the repository
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server

## Security
### Authentication
The project uses JWT for authentication. The token is stored in local storage and added to the authorization header for all API requests.

### Authorization
The project uses role-based authorization. Access to certain routes is restricted based on the user role.

### Data Protection
Sensitive data like passwords and tokens are encrypted before being stored or sent over the network.

## API Documentation
### Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| /login | POST | Authenticate user and return token |
| /dashboard | GET | Get dashboard data for logged in user |

### Request/Response Format
Example request/response format can be found in the code comments.

## Troubleshooting
### Common Issues
- `Environment variables not found`: Ensure the `.env` file is present and has the correct values.
- `API requests fail`: Check the network tab in developer tools for error messages.

### Debugging
Use React Developer Tools for debugging React components.

## License
MIT

## Contact
For any questions, please reach out to `developer@example.com`.