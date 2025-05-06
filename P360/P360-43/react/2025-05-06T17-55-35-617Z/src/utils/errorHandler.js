export const handleError = (error) => {
    // Log the error (for real application, use a more sophisticated logger)
    console.error(error.message);

    // Custom error handling logic
    if (error.response && error.response.status === 401) {
        // Unauthorized access
        return { error: 'Unauthorized. Please login again.' };
    } else if (error.response && error.response.status === 400) {
        // Bad request errors
        return { error: 'Bad Request. Check input.' };
    } else {
        // Generic error message for unhandled errors
        return { error: 'An unexpected error occurred. Please try again later.' };
    }
};