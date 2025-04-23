const logger = require('../utils/logger');

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    logger.error(err.stack);
    
    if (err instanceof Joi.ValidationError) {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.details
        });
    }
    
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            error: 'Authentication Error',
            message: err.message
        });
    }
    
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'An unexpected error occurred'
    });
};

module.exports = errorHandler;