import jwt from 'jsonwebtoken';

// Utility function for validating jwt tokens
export const validateToken = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (error) {
    console.error('Invalid token:', error);
    return false;
  }
};