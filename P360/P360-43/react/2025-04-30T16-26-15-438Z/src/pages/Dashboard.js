import React, { useEffect, useState } from 'react';
import { fetchUrgentFeedback } from '../services/feedbackService';

// Dashboard page showing pending and acknowledged urgent feedback
const Dashboard = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        // Fetch urgent feedback from the server
        const getFeedback = async () => {
            try {
                const data = await fetchUrgentFeedback();
                setFeedbackList(data);
            } catch (error) {
                console.error('Failed to fetch feedback:', error);
            }
        };
        getFeedback();
    }, []);

    return (
        <div>
            <h1>Urgent Feedback Dashboard</h1>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback.id}>
                        {feedback.message} - {feedback.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;