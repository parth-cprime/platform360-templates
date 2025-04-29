export const handleError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
  }
};