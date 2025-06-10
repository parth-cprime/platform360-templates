// JWT authentication middleware
const jwt = require('jsonwebtoken');
const config = require('../config/security');
const { UnauthorizedError } = require('../utils/errors');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError('Authorization token is missing.');

    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) throw new UnauthorizedError('Invalid token.');
        req.user = user;
        next();
    });
};