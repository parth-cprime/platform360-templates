export const handleError = (error, customMessage = 'An error occurred') => {
    console.error(customMessage, error);
    // Implement further error handling logic here, e.g., sending to an error logging service
};