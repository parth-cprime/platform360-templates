import React from 'react';

// Basic notification component
const Notification = ({ message, onAcknowledge }) => {
    return (
        <div className="notification">
            <p>{message}</p>
            <button onClick={onAcknowledge}>Acknowledge</button>
        </div>
    );
};

export default Notification;