// Import required packages
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

// Security middleware configuration
const securityConfig = {
    helmet: {
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'"]
            }
        }
    },
    rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    },
    cors: {
        origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
};

module.exports = {
    securityConfig,
    helmet,
    rateLimit,
    cors
};