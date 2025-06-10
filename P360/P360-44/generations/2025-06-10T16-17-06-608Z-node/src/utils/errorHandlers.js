// A utility to handle errors in async functions
const logger = require('./logger');

// Catches errors in async route handlers and passes them to the Express error middleware
function catchAsyncErrors(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(next);
    };
}

// Custom error classes
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized') {
        super(message);
        this.statusCode = 401;
    }
}

class ValidationError extends CustomError {
    constructor(message = 'Validation error') {
        super(message);
        this.statusCode = 400;
    }
}

class EncryptionError extends CustomError {
    constructor(message = 'Encryption error') {
        super(message);
        this.statusCode = 500;
    }
}

// Generic error handler middleware
const errorHandler = (err, req, res, next) => {
    logger.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.name,
        message: err.message
    });
};

module.exports = { catchAsyncErrors, errorHandler, UnauthorizedError, ValidationError, EncryptionError };