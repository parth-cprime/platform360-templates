const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const securityConfig = require('./config/security');

const app = express();

app.use(helmet(securityConfig.helmet));
app.use(cors(securityConfig.cors));

// Import routes
const routes = require('./routes');
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;