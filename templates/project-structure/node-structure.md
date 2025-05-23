# Node.js Project Structure Template

## Project Structure
```
project/
├── src/
│   ├── controllers/         # API controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── apiController.js
│   ├── models/             # Data models
│   │   ├── user.js
│   │   └── index.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── user.js
│   │   └── index.js
│   ├── services/           # Business logic
│   │   ├── authService.js
│   │   ├── userService.js
│   │   └── dataService.js
│   ├── middleware/         # Custom middleware
│   │   ├── auth.js
│   │   ├── error.js
│   │   └── validation.js
│   ├── config/             # Configuration files
│   │   ├── security.js
│   │   ├── database.js
│   │   └── index.js
│   ├── utils/              # Utility functions
│   │   ├── logger.js
│   │   ├── validator.js
│   │   └── encryption.js
│   └── index.js            # Application entry point
├── tests/                  # Test files
│   ├── controllers/
│   ├── services/
│   └── utils/
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## Required Files

### 1. src/config/security.js
```javascript
// Security configuration
module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: '1h',
    bcryptSaltRounds: 10,
    corsOptions: {
        origin: process.env.ALLOWED_ORIGINS,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
};
```

### 2. src/middleware/auth.js
```javascript
// JWT authentication middleware
const jwt = require('jsonwebtoken');
const config = require('../config/security');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
```

### 3. src/controllers/apiController.js
```javascript
// Main API controller
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/protected', auth, (req, res) => {
    res.json({ message: 'Protected route accessed' });
});

module.exports = router;
```

### 4. src/routes/api.js
```javascript
// API routes with security middleware
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const apiController = require('../controllers/apiController');

router.use('/api', auth, apiController);

module.exports = router;
```

### 5. src/services/dataService.js
```javascript
// Service layer with data encryption
const crypto = require('crypto');
const config = require('../config/security');

class DataService {
    encryptData(data) {
        const cipher = crypto.createCipher('aes-256-cbc', config.encryptionKey);
        let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decryptData(encryptedData) {
        const decipher = crypto.createDecipher('aes-256-cbc', config.encryptionKey);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }
}

module.exports = new DataService();
```

### 6. src/utils/logger.js
```javascript
// Security logging utility
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = logger;
```

## Dependencies
```json
{
    "dependencies": {
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "bcryptjs": "^2.4.3",
        "helmet": "^4.6.0",
        "cors": "^2.8.5",
        "winston": "^3.3.3",
        "crypto": "^1.0.1"
    },
    "devDependencies": {
        "jest": "^27.0.6",
        "supertest": "^6.1.3"
    }
}
```

## Security Considerations
1. Implement proper JWT token validation
2. Use secure password hashing with bcrypt
3. Enable CORS with proper configuration
4. Implement rate limiting
5. Use security headers with helmet
6. Encrypt sensitive data
7. Implement proper error handling
8. Use secure session management
9. Validate all input data
10. Implement proper logging

## Best Practices
1. Follow Node.js security best practices
2. Use environment variables for sensitive data
3. Implement proper error handling
4. Use TypeScript for type safety
5. Implement comprehensive testing
6. Use proper logging
7. Follow the principle of least privilege
8. Implement proper session management
9. Use secure communication protocols
10. Regular security updates 
