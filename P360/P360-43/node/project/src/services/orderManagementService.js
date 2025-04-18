// Node.js order management service

const express = require('express');
const bodyParser = require('body-parser');
const OAuth = require('oauth');
const winston = require('winston');

// Error handling middleware
const errorHandler = require('../utils/errorHandler');

// Create Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Configure OAuth
const oauth = new OAuth.OAuth(
    'https://api.provider.com/oauth/request_token',
    'https://api.provider.com/oauth/access_token',
    'yourapplicationconsumerkey',
    'yourapplicationconsumersecret',
    '1.0A',
    null,
    'HMAC-SHA1'
);

// Configure winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

app.get('/orders', (req, res, next) => {
    // Fetch orders
    // Error handling is done by the errorHandler middleware
    oauth.get(
        'https://api.provider.com/orders',
        'user_token', // test user token
        'user_secret', // test user secret
        function (error, data, response) {
            if (error) {
                logger.error('Failed to fetch orders: ', error);
                next(error);
            } else {
                res.send(data);
            }
        }
    );
});

// Error handling middleware
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Order management service listening on port 3000');
});

module.exports = app;