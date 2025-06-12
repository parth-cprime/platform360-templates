// Main API controller
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Example protected route
router.get('/protected', auth, (req, res) => {
    res.json({ message: 'Protected route accessed' });
});

module.exports = router;