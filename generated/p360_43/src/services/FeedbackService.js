const { FeedbackModel } = require('../models/FeedbackModel');

class FeedbackService {
  async createFeedback(feedbackData) {
    return FeedbackModel.create(feedbackData);
  }
}

module.exports = { FeedbackService };

// The FeedbackService handles the business logic for creating new feedback entries.
// It interacts with the FeedbackModel to persist the data.