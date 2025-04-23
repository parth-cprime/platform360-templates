// Import required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

// Import configuration
const { jwtConfig } = require('../config/securityConfig');

// User schema for validation
const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required()
});

/**
 * A helper function to hash the password
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

/**
 * A helper function to generate JWT token
 * @param {object} payload - The payload to include in the token
 * @returns {string} The JWT token
 */
const generateToken = (payload) => {
    return jwt.sign(payload, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
        algorithm: jwtConfig.algorithm
    });
};

exports.userSchema = userSchema;
exports.hashPassword = hashPassword;
exports.generateToken = generateToken;