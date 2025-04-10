const { FeedbackService } = require('../services/FeedbackService');
const { NotificationService } = require('../services/NotificationService');

class FeedbackController {
  async submitFeedback(req, res, next) {
    try {
      const { title, description, urgent } = req.body;
      
      const feedback = await FeedbackService.createFeedback({
        title,
        description,
        urgent
      });
      
      if (feedback.urgent) {
        await NotificationService.notifyTeam(feedback);
      }
      
      res.status(201).json(feedback);
    } catch (err) {
      next(err);  
    }
  }
}

module.exports = { FeedbackController };

// This controller handles the API route for submitting customer feedback.
// It uses the FeedbackService to create a new feedback entry and the 
// NotificationService to send urgent notifications to the team.