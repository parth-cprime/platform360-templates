// Security configuration
module.exports = {
    jwtSecret: process.env.JWT_SECRET, // Secret key for JWT signing and encryption
    jwtExpiration: '1h', // Token expiration time
    bcryptSaltRounds: 10, // Number of salt rounds for bcrypt hashing
    corsOptions: { // Configuration for Cross-Origin Resource Sharing
        origin: process.env.ALLOWED_ORIGINS, // Allowed origins
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'] // Allowed custom headers
    },
    helmetConfig: { // Configuration for helmet, a security package for setting HTTP headers
        contentSecurityPolicy: { // Content Security Policy settings
            directives: {
                defaultSrc: ["'self'"], // Default policy for loading content such as JavaScript, Images, CSS, Fonts, AJAX requests, Frames, HTML5 Media
                scriptSrc: ["'self'", "'unsafe-inline'"], // Allowed sources for scripts
                styleSrc: ["'self'", "'unsafe-inline'"], // Allowed sources for stylesheets
                imgSrc: ["'self'", "data:", "https:"], // Allowed sources for images
                connectSrc: ["'self'"] // Limit the origins to which you can connect (via XHR, WebSockets, and EventSource).
            }
        }
    },
    rateLimitConfig: { // Configuration for express-rate-limit, a middleware for rate limiting incoming requests
        windowMs: 15 * 60 * 1000, // Time window in milliseconds
        max: 100 // Maximum number of requests per window per client IP address
    }
};