import axios from 'axios';

const API_URL = '/api/notifications';

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
};

export const fetchUrgentNotifications = async () => {
    try {
        const response = await axios.get(`${API_URL}/urgent`, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching urgent notifications:', error.response);
        throw error;
    }
};

export const acknowledgeNotification = async (id) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}/acknowledge`, {}, config);
        return response.data;
    } catch (error) {
        console.error('Error acknowledging notification:', error.response);
        throw error;
    }
};