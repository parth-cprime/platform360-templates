const jwt = require('jsonwebtoken');
const { AuthError } = require('../utils/errors');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new AuthError('Authentication required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded;
    next();
  } catch (err) {
    throw new AuthError('Invalid token');
  }
};

module.exports = { authMiddleware };

// The authMiddleware verifies the JWT token provided in the Authorization header.
// It decodes the token, attaches the user details to the request object, and 
// passes control to the next middleware/handler. If authentication fails, it
// raises an AuthError.