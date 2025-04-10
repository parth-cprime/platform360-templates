const { AuthError, ValidationError } = require('../utils/errors');

const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  if (err instanceof AuthError) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({ message: 'Validation failed', details: err.message });
  }

  res.status(500).json({ message: 'Internal server error' });
};

module.exports = { errorMiddleware };

// The errorMiddleware is the central error handling middleware. It catches any
// errors thrown by previous middlewares/handlers. It checks the type of error and
// sends an appropriate HTTP response with a generic error message. It avoids 
// leaking sensitive error details to the client.