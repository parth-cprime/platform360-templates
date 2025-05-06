import React from 'react';

// FeedbackList component to display a list of feedback
const FeedbackList = ({ feedbacks }) => {
    return (
        <ul>
            {feedbacks.map(feedback => (
                <li key={feedback.id}>{feedback.message}</li>
            ))}
        </ul>
    );
};

export default FeedbackList;