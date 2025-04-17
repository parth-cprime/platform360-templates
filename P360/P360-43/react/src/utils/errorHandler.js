/**
 * Utility function for handling errors
 * @param {Error} error - The error object
 * @returns {void}
 */
export const handleError = (error) => {
  // Log the error to console (or send to logging service)
  console.error(error);
  
  // Show an error notification to the user
  NotificationComponent({ message: error.message, type: 'error' });
};