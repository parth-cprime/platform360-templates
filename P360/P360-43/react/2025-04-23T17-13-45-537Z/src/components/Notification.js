// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Notification component: displays a notification for the user.
 */
const Notification = ({ message, type, onAcknowledge }) => {
    return (
        <div className={`notification ${type}`}>
            <p>{message}</p>
            <button onClick={onAcknowledge}>Acknowledge</button>
        </div>
    );
};

// Prop validation
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'info', 'warning']).isRequired,
    onAcknowledge: PropTypes.func.isRequired
};

export default Notification;