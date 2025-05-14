const { analyzeFeedback } = require('../utils/feedbackAnalyzer');
const { sendNotification } = require('../utils/notificationSender');

const processFeedback = async (feedback) => {
    const isUrgent = analyzeFeedback(feedback.content);
    if (isUrgent) {
        await sendNotification(feedback);
    }
    return { success: true, message: isUrgent ? 'Urgent feedback received and notification sent.' : 'Feedback received.' };
};

module.exports = { processFeedback };