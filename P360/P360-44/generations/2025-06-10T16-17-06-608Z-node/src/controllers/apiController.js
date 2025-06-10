// Main API controller
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { catchAsyncErrors } = require('../utils/errorHandlers');

// Dummy route for protected content
router.get('/protected', auth, catchAsyncErrors(async (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
}));

module.exports = router;