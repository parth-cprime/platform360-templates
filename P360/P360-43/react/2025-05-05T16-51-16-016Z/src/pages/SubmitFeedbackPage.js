import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';

const SubmitFeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await submitFeedback({ feedback });
            alert('Feedback submitted successfully!');
            setFeedback('');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Submit Feedback</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={feedback} onChange={handleFeedbackChange} />
                <button type="submit" disabled={isLoading}>Submit</button>
            </form>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default SubmitFeedbackPage;