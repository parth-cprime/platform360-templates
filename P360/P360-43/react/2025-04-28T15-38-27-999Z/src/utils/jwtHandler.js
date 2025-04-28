import jwt from 'jsonwebtoken';

const jwtConfig = {
  secret: process.env.REACT_APP_JWT_SECRET,
  expiresIn: '1h',
  algorithm: 'HS256',
};

export const generateToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
    algorithm: jwtConfig.algorithm,
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtConfig.secret);
  } catch (error) {
    return null;
  }
};