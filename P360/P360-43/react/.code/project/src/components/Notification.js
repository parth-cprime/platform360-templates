import React from 'react';

// Notification component for displaying alerts
const Notification = ({ message, type }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;