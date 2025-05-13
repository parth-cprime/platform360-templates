const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { securityConfig } = require('./config/securityConfig');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes'); // Assume authRoutes are defined for authentication endpoints
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(helmet(securityConfig.helmet));
app.use(rateLimit(securityConfig.rateLimit));
app.use(cors(securityConfig.cors));

// Routes
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});