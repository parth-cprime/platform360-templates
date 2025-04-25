const Feedback = require('../models/Feedback');
const { sendUrgentFeedbackEmail } = require('../services/notificationService');

const submitFeedback = async (req, res) => {
    try {
        const { content, category } = req.body;
        const urgent = analyzeFeedback(content); // A function to analyze feedback; implementation is not provided here

        const feedback = new Feedback({ content, category, urgent });
        await feedback.save();

        if (urgent) {
            await sendUrgentFeedbackEmail(feedback);
        }

        res.status(201).json({ message: 'Feedback submitted successfully', feedbackId: feedback._id });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

module.exports = { submitFeedback };