const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    content: { type: String, required: true },
    category: { type: String, required: true },
    urgent: { type: Boolean, default: false },
    acknowledged: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);