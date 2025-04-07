```javascript
// src/middleware/AuthMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
```

Description: The `AuthMiddleware` implements JWT authentication. It verifies the presence and validity of the JWT token in the request header and attaches the decoded user information to the request object.