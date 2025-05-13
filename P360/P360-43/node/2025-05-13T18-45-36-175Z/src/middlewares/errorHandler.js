const logger = require('../utils/logger');

// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    error: true,
    message,
  });
};

module.exports = errorHandler;