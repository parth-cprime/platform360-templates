import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

/**
 * Config for JWT authentication
 */
const jwtConfig = {
  secret: process.env.JWT_SECRET, 
  expiresIn: '1h',
  algorithm: 'HS256'
};

/**
 * Function for hashing password
 * @param {string} password - The password to be hashed.
 */
export const hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Function for generating JWT token
 * @param {object} payload - The payload to be included in the JWT token.
 */
export const generateToken = payload => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn
  });
};

/**
 * Function for verifying JWT token
 * @param {string} token - The JWT token to verify.
 */
export const verifyToken = token => {
  return jwt.verify(token, jwtConfig.secret);
};