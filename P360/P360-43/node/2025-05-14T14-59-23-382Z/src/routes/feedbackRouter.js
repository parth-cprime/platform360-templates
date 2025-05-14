const express = require('express');
const { processFeedback } = require('../services/feedbackService');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, async (req, res, next) => {
    try {
        const feedback = req.body;
        const result = await processFeedback(feedback);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;