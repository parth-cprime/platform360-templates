// API routes with security middleware
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const auth = require('../middleware/auth');

router.use('/api', auth, apiController);

module.exports = router;