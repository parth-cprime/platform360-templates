import React, { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';

const Dashboard = () => {
    const { data, error, loading, fetchApi } = useApi('/api/urgent-feedback');
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetchApi({ method: 'GET' });
    }, []);

    useEffect(() => {
        if(data) {
            setFeedbackList(data);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading feedback!</p>;

    return (
        <div>
            <h2>Urgent Feedback</h2>
            <ul>
                {feedbackList.map(feedback => (
                    <li key={feedback.id}>{feedback.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;