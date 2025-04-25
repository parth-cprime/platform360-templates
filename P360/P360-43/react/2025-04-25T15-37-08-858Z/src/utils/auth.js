// JWT authentication and security configurations
import jwt from 'jsonwebtoken';
const jwtConfig = {
    secret: process.env.REACT_APP_JWT_SECRET,
    expiresIn: '1h',
    algorithm: 'HS256'
};

export const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
    });
};

export const verifyToken = (token) => {
    return jwt.verify(token, jwtConfig.secret);
};