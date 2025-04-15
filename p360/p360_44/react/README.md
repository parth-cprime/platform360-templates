# React JWT Authentication Project

## Overview
This project is a template for a React application with JWT Authentication. It features a directory structure for managing components, pages, services, hooks, context, utils, and assets. It includes code snippets for an AuthContext, an axios instance with request and response interceptors, a ProtectedRoute component, a security utility for data encryption/decryption, a custom hook for accessing the AuthContext, and a Login page.

## Technical Stack
- Programming Language: JavaScript
- Frameworks: React, React Router Dom
- External Services: Axios, CryptoJS, Jsonwebtoken

## Architecture
The project follows a standard React project structure with a separation of concerns principle. It includes:
- Components: Reusable components for authentication, layout, and common components
- Pages: Page components such as Home, Dashboard and Profile
- Services: API services for authentication and data access
- Hooks: Custom hooks like useAuth and useApi
- Context: Context providers such as AuthContext and ThemeContext
- Utils: Utility functions for security, validation and encryption
- Assets: Static assets like images and styles

## Setup and Installation
### Prerequisites
- Node.js version 14 or above
- NPM version 6 or above

### Installation Steps
1. Clone the repository
2. Run `npm install` command to install dependencies

### Configuration
- Create a .env file at the root of your project and add REACT_APP_API_URL and REACT_APP_ENCRYPTION_KEY variables.

## Development
### Building the Project
```bash
npm run build
```

### Running the Project
```bash
npm start
```

## Deployment
### Prerequisites
- A server to host the built React application.

### Deployment Steps
1. Run `npm run build` to create a production build of the application
2. Upload the built files to your server
3. Configure your server to serve the uploaded files

## Security
### Authentication
The application uses JWT for authentication. The token is stored in local storage and sent with every API request.

### Authorization
The application includes a ProtectedRoute component that checks for user authentication before rendering the component. If the user is not authenticated, it redirects to the login page.

### Data Protection
The application uses CryptoJS for encrypting sensitive data. 

## API Documentation
The application uses Axios for making API requests. The base URL for the API is defined in .env file.

## Troubleshooting
### Common Issues
- Error: 'REACT_APP_API_URL' is not recognized as an internal or external command,
operable program or batch file.
Solution: Make sure to create a .env file at the root of your project and add REACT_APP_API_URL variable.

### Debugging
You can use browser-based tools such as Chrome DevTools for debugging this application.

## License
MIT License

## Contact
For any queries, please send an email to support@example.com

## CODE Generation (2025-04-15T22:29:20.660Z)
- **Task ID:** P360-44
- **Language:** react
- **Security Level:** medium
- **Auth Method:** jwt
- **Data Sensitivity:** internal
- **Generated Files:** 8
- **Full Prompt:** [View Details](./.prompts/code-2025-04-15T22:29:20.660Z.json)

### Generated Files:
- p360/p360_44/react/README.md
- p360/p360_44/react/src/context/AuthContext.js
- p360/p360_44/react/src/services/api.js
- p360/p360_44/react/src/components/ProtectedRoute.js
- p360/p360_44/react/src/utils/security.js
- p360/p360_44/react/src/hooks/useAuth.js
- p360/p360_44/react/src/pages/Login.js
- p360/p360_44/react/package.json
