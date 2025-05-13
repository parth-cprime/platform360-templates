require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Security configuration for the application
const securityConfig = {
    jwtConfig: {
        secret: process.env.JWT_SECRET || 'default_secret',
        expiresIn: '1h',
        algorithm: 'HS256'
    }
};

module.exports = securityConfig;