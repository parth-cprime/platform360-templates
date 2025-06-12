// Security configuration
module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: '1h',
    bcryptSaltRounds: 10,
    corsOptions: {
        origin: process.env.ALLOWED_ORIGINS,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    },
    encryptionKey: process.env.ENCRYPTION_KEY
};