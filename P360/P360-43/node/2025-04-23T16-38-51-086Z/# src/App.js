require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');
const { jwtConfig, hashPassword } = require('src/services/authService');
const { userSchema } = require('src/services/validationService');
const { errorHandler } = require('src/services/errorService');

const app = express();
app.use(helmet(securityConfig.helmet));
app.use(rateLimit(securityConfig.rateLimit));
app.use(cors(securityConfig.cors));
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON body

// Authentication middleware
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return next(new Error('No token provided'));
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return next(new Error('Failed to authenticate token'));
    }
    req.user = decoded;
    next();
  });
});

// Route handlers
app.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  // Validate input
  const { error } = userSchema.validate({ username, password });
  if (error) return next(error);
  // Check user and password in DB
  // Hash the password
  const hashedPassword = await hashPassword(password);
  // Compare with hashed password in DB
  // If match, generate token
  const token = jwt.sign({ username }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn
  });
  res.json({ token });
});

app.use(errorHandler);

app.listen(3000, () => console.log('Server is running on port 3000'));