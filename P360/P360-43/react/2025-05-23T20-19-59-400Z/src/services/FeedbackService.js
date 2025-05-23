// Mock FeedbackService for demonstration purposes

export const analyzeFeedback = async (feedback) => {
    // Mock analysis logic to identify urgent feedback
    console.log(`Analyzing feedback: ${feedback}`);
    // Simulate analyzing feedback for urgency
    const isUrgent = feedback.toLowerCase().includes("urgent");
    return {
        feedback,
        isUrgent,
        category: "customer service"
    };
};