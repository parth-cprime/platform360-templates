import React from 'react';
import PropTypes from 'prop-types';

/**
 * Notification Component
 * Shows a popup notification to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success', 'error', 'warning')
 * @returns {JSX.Element}
 */
const NotificationComponent = ({ message, type }) => (
  <div className={`notification ${type}`}>
    {message}
  </div>
);

NotificationComponent.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NotificationComponent;