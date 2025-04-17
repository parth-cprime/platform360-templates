// Dashboard component
import React, { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

const Dashboard = () => {
    const { feedbacks } = useContext(FeedbackContext);

    // Render
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Pending feedbacks: {feedbacks.filter(feedback => !feedback.acknowledged).length}</p>
            <p>Acknowledged feedbacks: {feedbacks.filter(feedback => feedback.acknowledged).length}</p>
        </div>
    );
};

export default Dashboard;