const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const feedbackRouter = require('./routes/feedbackRouter');
require('dotenv').config();

const app = express();

// Apply security configurations
app.use(helmet(process.env.HELMET_CONFIG));
app.use(rateLimit(process.env.RATE_LIMIT_CONFIG));
app.use(cors(process.env.CORS_CONFIG));
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRouter);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));