// import dependencies
import jwt from 'jsonwebtoken';

// secret key for JWT
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

// generate JWT token
export function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}