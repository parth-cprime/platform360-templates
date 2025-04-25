// This is a mock service simulating interaction with a backend for feedback analysis and notification

const analyzeFeedback = async (feedback) => {
  // Simulate analyzing the feedback to determine urgency and category
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const isUrgent = feedback.includes("urgent");
      resolve({ isUrgent, category: "general" });
    }, 1000); // Simulated delay
  });
};

const notifyTeamMember = async (category) => {
  // Simulate sending a notification to a team member based on the feedback category
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500); // Simulated delay
  });
};

export { analyzeFeedback, notifyTeamMember };