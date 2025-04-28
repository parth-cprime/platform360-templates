const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// JWT Authentication configuration
const jwtConfig = {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
    algorithm: 'HS256'
};

// Password hashing function
exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// JWT token generator function
exports.generateToken = (userId) => {
    return jwt.sign({ userId }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
        algorithm: jwtConfig.algorithm
    });
};

// Middleware to authenticate JWT token
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtConfig.secret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};