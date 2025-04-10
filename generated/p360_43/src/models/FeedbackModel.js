const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  urgent: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

module.exports = { FeedbackModel };

// The FeedbackModel defines the schema for customer feedback data.
// It includes fields for the title, description, urgency flag, and creation timestamp.