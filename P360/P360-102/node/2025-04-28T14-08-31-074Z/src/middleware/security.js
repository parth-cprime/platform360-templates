const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// Import the security configuration object
const { securityConfig } = require('../config/securityConfig');

// Helmet middleware for setting various HTTP headers for security
exports.helmetSetup = () => helmet(securityConfig.helmet);

// Rate limiting middleware setup
exports.rateLimitSetup = () => rateLimit(securityConfig.rateLimit);

// CORS middleware setup
exports.corsSetup = () => cors(securityConfig.cors);