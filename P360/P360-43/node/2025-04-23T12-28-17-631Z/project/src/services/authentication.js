// Import required packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

module.exports = {
    jwtConfig,
    hashPassword
};