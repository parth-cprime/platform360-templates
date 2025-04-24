import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';
import errorHandler from '../utils/errorHandler';

function FeedbackNotification() {
    const { authState } = useContext(AuthContext);

    const acknowledgeFeedback = async (feedbackId) => {
        try {
            await apiService.post('/feedback/acknowledge', { feedbackId });
        } catch (error) {
            errorHandler(error);
        }
    };

    return (
        <div>
            {/* Notification component */}
        </div>
    );
}

export default FeedbackNotification;