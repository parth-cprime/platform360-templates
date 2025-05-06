import React from 'react';
import PropTypes from 'prop-types';

// NotificationAlert component for displaying urgent feedback notifications
const NotificationAlert = ({ message, onAcknowledge }) => {
  return (
    <div className="notification-alert">
      <p>{message}</p>
      <button onClick={onAcknowledge}>Acknowledge</button>
    </div>
  );
};

NotificationAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onAcknowledge: PropTypes.func.isRequired,
};

export default NotificationAlert;