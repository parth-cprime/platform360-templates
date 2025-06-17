import React, { useState } from 'react';
import { useFetchFeedback } from '../hooks/useFetchFeedback';
import ProtectedRoute from '../components/ProtectedRoute';
import { decryptData } from '../utils/security';

/**
 * Dashboard Page Component
 * This component is protected and can only be accessed by authenticated users.
 * It displays urgent customer feedback and provides a way to acknowledge them.
 */
const Dashboard = () => {
    const [refresh, setRefresh] = useState(false);
    const { data, loading, error } = useFetchFeedback(refresh);

    const acknowledgeFeedback = async (id) => {
        try {
            await api.post(`/feedback/acknowledge/${id}`);
            setRefresh(!refresh); // Toggle refresh state to trigger re-fetch
        } catch (err) {
            console.error("Error acknowledging feedback:", err);
            // Implement proper error handling
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>An error occurred</div>;

    return (
        <ProtectedRoute>
            <div>
                <h2>Urgent Feedback</h2>
                <ul>
                    {data.map(feedback => (
                        <li key={feedback.id}>
                            {decryptData(feedback.message)} - <button onClick={() => acknowledgeFeedback(feedback.id)}>Acknowledge</button>
                        </li>
                    ))}
                </ul>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;