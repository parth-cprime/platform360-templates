// Middleware for handling JWT authentication

import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../utils/errors';

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return next(new AuthenticationError('Invalid token'));
        req.user = user;
        next();
    });
};