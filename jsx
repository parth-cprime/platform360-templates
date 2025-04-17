import express from 'express';
import jwt from 'jsonwebtoken';
import logger from './logger';
import validateInput from './validate';

const app = express();

// Middleware for jwt authentication
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({error: "No token provided"});
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'your-very-secret-key', (err, decoded) => {
        if (err) {
            return res.status(403).json({error: "Failed to authenticate token"});
        }
        req.decoded = decoded;
        next();
    });
});

app.post('/feedback', validateInput, async (req, res) => {
    const {body} = req;

    try {
        // Business and logic goes here
        logger.log('Feedback received and processed', body);
        return res.json({success: true});
    } catch (error) {
        logger.error('Error processing feedback', error);
        return res.status(500).json({error: error.toString()});
    }
});

app.listen(3000, () => {
    logger.log('Order management API server started on port 3000');
});

