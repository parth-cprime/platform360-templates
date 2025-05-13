const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtConfig } = require('../config/securityConfig');
const User = require('../models/User'); // Assume a User model is defined for database operations
const logger = require('../utils/logger'); // Assume a logger utility is implemented

// Authenticate user and generate JWT
const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { token, user };
  } catch (error) {
    logger.error(`Authentication error: ${error.message}`);
    throw error;
  }
};

// Register new user
const registerUser = async (username, password, email) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    return newUser;
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    throw error;
  }
};

module.exports = {
  authenticateUser,
  registerUser,
};