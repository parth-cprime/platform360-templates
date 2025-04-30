import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Feedback form component for collecting customer feedback
const FeedbackForm = ({ onSubmit }) => {
    const [feedback, setFeedback] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim()) {
            onSubmit(feedback);
            setFeedback('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback..."
                required
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

FeedbackForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default FeedbackForm;