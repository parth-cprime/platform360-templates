const { ValidationError } = require('joi');
const logger = require('../utils/logger');

// Error handling middleware
exports.errorHandler = (err, req, res, next) => {
    logger.error(err.stack);
    
    if (err instanceof ValidationError) {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.details
        });
    }
    
    // Additional error types can be handled here

    res.status(500).json({
        error: 'Internal Server Error',
        message: 'An unexpected error occurred'
    });
};