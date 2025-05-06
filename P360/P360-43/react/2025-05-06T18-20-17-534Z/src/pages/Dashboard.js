import React, { useEffect, useState } from 'react';
import { NotificationService } from '../services/NotificationService';
import FeedbackList from '../components/FeedbackList';

// Dashboard component to display urgent feedback
const Dashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        async function fetchUrgentFeedback() {
            const urgentFeedbacks = await NotificationService.fetchUrgentFeedback();
            setFeedbacks(urgentFeedbacks);
        }

        fetchUrgentFeedback();
    }, []);

    return (
        <div>
            <h1>Urgent Feedback</h1>
            <FeedbackList feedbacks={feedbacks} />
        </div>
    );
};

export default Dashboard;