// Dashboard to display urgent feedback status
import React from 'react';

const Dashboard = ({ feedbacks }) => {
    return (
        <div>
            <h2>Urgent Feedback Dashboard</h2>
            {feedbacks.map((feedback, index) => (
                <div key={index}>
                    <p>{feedback.message}</p>
                    <p>Status: {feedback.acknowledged ? 'Acknowledged' : 'Pending'}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;