const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// JWT Authentication
const jwtConfig = {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
    algorithm: 'HS256'
};

// Password hashing
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const verifyPassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
const generateToken = (payload) => {
    return jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

// Verify JWT token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtConfig.secret);
    } catch (err) {
        throw new Error('Invalid token');
    }
};

module.exports = {
    hashPassword,
    verifyPassword,
    generateToken,
    verifyToken
};