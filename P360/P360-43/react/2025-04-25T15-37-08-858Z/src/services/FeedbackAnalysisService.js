// Service to analyze feedback for urgency and sentiment
import { useState } from 'react';

export const useFeedbackAnalysis = () => {
    const [isUrgent, setIsUrgent] = useState(false);

    const analyzeFeedback = (feedback) => {
        // Example analysis logic (to be replaced with actual NLP processing)
        const urgentKeywords = ['urgent', 'immediate', 'asap'];
        const hasUrgentKeywords = urgentKeywords.some(keyword => feedback.toLowerCase().includes(keyword));

        setIsUrgent(hasUrgentKeywords);
        return hasUrgentKeywords;
    };

    return { isUrgent, analyzeFeedback };
};