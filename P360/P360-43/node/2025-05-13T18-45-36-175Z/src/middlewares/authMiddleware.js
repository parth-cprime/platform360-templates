const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config/securityConfig');
const logger = require('../utils/logger');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token.split(' ')[1], jwtConfig.secret, (err, decoded) => {
    if (err) {
      logger.error(`Token verification error: ${err.message}`);
      return res.status(401).send({ message: 'Unauthorized!' });
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;