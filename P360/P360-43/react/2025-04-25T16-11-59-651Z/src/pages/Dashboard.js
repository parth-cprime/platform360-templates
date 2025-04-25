import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
    const [notifications, setNotifications] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${authToken}` },
                };
                const response = await axios.get('/api/notifications', config);
                setNotifications(response.data.notifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        if (authToken) {
            fetchNotifications();
        }
    }, [authToken]);

    return (
        <div>
            <h2>Urgent Feedback Notifications</h2>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;