import React from 'react';
import PropTypes from 'prop-types';

// This component displays a notification for urgent feedback.
export function FeedbackNotification({ feedback }) {
    return (
        <div className="FeedbackNotification">
            <h2>Urgent Feedback</h2>
            <p>{feedback.message}</p>
        </div>
    );
}

FeedbackNotification.propTypes = {
    feedback: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
};