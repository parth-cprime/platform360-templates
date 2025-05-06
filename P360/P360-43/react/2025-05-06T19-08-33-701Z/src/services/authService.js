import jwt from 'jsonwebtoken';
const jwtConfig = {
    secret: process.env.JWT_SECRET || 'your_jwt_secret', // Ensure to replace 'your_jwt_secret' with a real secret in production
    expiresIn: '1h',
    algorithm: 'HS256'
};

// Function to generate JWT token
export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

// Middleware to authenticate and protect routes
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401); // if there isn't any token
    
    jwt.verify(token, jwtConfig.secret, (err, user) => {
        if (err) return res.sendStatus(403); // if the token has expired or is invalid
        req.user = user;
        next();
    });
};