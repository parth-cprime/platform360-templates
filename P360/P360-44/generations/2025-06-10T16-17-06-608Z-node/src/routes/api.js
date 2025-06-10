// API routes with security middleware
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.use('/api', apiController);

module.exports = router;