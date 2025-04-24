import jwt from 'jsonwebtoken';

const jwtConfig = {
  secret: process.env.JWT_SECRET || 'default_secret',
  expiresIn: '1h',
  algorithm: 'HS256'
};

// Function to generate JWT token
export function generateToken(payload) {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
    algorithm: jwtConfig.algorithm,
  });
}

// Function to verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, jwtConfig.secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

// Function to get JWT token from request headers
export function getTokenFromHeaders(headers) {
  if (!headers.authorization) {
    throw new Error('No authorization header');
  }

  const [bearer, token] = headers.authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    throw new Error('Invalid authorization format');
  }

  return token;
}