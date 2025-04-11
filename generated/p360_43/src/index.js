// Application entry point
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const securityConfig = require('./config/security');

const app = express();

// Security middlewares
app.use(helmet(securityConfig.helmet));
app.use(cors(securityConfig.cors));
app.use(rateLimit(securityConfig.rateLimit));

// Import routes
const apiRoutes = require('./routes/api');

// Use routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(require('./middleware/error'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));