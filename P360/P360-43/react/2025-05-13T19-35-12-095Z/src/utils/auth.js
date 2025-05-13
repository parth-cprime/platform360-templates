import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.REACT_APP_JWT_SECRET || 'your_secret_key';

export const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    console.log('JWT Verification Error: ', e);
    return null;
  }
};