export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // In a real-world scenario, use a more sophisticated logger like Winston or Bunyan
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected error occurred';

    res.status(statusCode).json({
        error: message
    });
};