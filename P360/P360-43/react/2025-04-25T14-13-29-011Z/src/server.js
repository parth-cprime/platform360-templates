const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { securityConfig } = require('./config/securityConfig');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Apply security configurations
app.use(helmet(securityConfig.helmet));
app.use(rateLimit(securityConfig.rateLimit));
app.use(cors(securityConfig.cors));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes would go here

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});