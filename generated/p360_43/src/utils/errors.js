class AuthError extends Error {}
class ValidationError extends Error {}

module.exports = {
  AuthError,
  ValidationError
};

// The errors module defines custom error classes for authentication and validation
// errors. These classes extend the built-in Error class and are used to differentiate
// between different types of errors in the error handling middleware.