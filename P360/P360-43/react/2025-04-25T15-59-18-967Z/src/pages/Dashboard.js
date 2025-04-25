import React, { useEffect, useState } from 'react';
import { fetchUrgentNotifications, acknowledgeNotification } from '../services/notificationService';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const [notifications, setNotifications] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            fetchUrgentNotifications().then(setNotifications).catch(console.error);
        }
    }, [currentUser]);

    const handleAcknowledge = (id) => {
        acknowledgeNotification(id)
            .then(() => {
                setNotifications(notifications.filter(notification => notification.id !== id));
            })
            .catch(console.error);
    };

    if (!currentUser) {
        return <p>Please log in to view notifications.</p>;
    }

    return (
        <div>
            <h2>Urgent Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message} <button onClick={() => handleAcknowledge(notification.id)}>Acknowledge</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;