export const jwtConfig = {
    secret: process.env.REACT_APP_JWT_SECRET || 'your_secret_key',
    expiresIn: '1h',
    algorithm: 'HS256'
};