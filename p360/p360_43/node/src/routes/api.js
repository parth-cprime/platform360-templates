// API routes with security middleware
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const apiController = require('../controllers/apiController');

router.use('/api', auth, apiController);

module.exports = router;