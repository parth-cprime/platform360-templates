// Component to route notifications based on feedback category
import React from 'react';

const NotificationRouter = ({ category, message }) => {
    const routeNotification = (category) => {
        // Placeholder for routing logic
        console.log(`Routing ${category} notification`);
    };

    React.useEffect(() => {
        routeNotification(category);
    }, [category]);

    return (
        <div>
            Routing notification for category: {category}
            <p>{message}</p>
        </div>
    );
};

export default NotificationRouter;