require('dotenv').config();
const axios = require('axios');
const jwt = require('jsonwebtoken');

/**
 * Generates a JWT for Zoom API authentication.
 * @returns {string} The generated JWT token.
 */
const generateJwtToken = () => {
  const payload = {
    iss: process.env.ZOOM_API_KEY,
    exp: new Date().getTime() + 5000, // Token expires in 5 seconds
  };
  return jwt.sign(payload, process.env.ZOOM_API_SECRET, { algorithm: 'HS256' });
};

/**
 * Fetches Zoom call recordings based on the provided date range.
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 * @returns {Promise<Array>} An array of URLs for the recordings.
 */
const fetchRecordings = async (startDate, endDate) => {
  try {
    const jwtToken = generateJwtToken();
    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json',
      },
    };
    const response = await axios.get(`https://api.zoom.us/v2/users/me/recordings?from=${startDate}&to=${endDate}`, config);
    
    if (response.data && response.data.meetings.length > 0) {
      const recordingUrls = response.data.meetings.map(meeting =>
        meeting.recording_files.map(file => file.download_url)
      ).flat();
      return recordingUrls;
    }
    return [];
  } catch (error) {
    console.error('Error fetching Zoom recordings:', error);
    throw new Error('Failed to fetch Zoom recordings');
  }
};

module.exports = { fetchRecordings };