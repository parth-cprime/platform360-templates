import { useState, useEffect } from 'react';

// Custom hook for analyzing feedback and determining urgency
const useFeedbackAnalysis = (feedback) => {
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const urgentKeywords = ['urgent', 'immediately', 'asap'];
    const hasUrgentKeyword = urgentKeywords.some(keyword => feedback.includes(keyword));
    setIsUrgent(hasUrgentKeyword);
  }, [feedback]);

  return isUrgent;
};

export default useFeedbackAnalysis;