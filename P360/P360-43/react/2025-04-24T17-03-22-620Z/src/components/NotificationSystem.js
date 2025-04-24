import React from 'react';
import { verifyToken } from '../services/authService';

export class NotificationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    this.fetchNotifications();
  }

  fetchNotifications() {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    verifyToken(token);

    // Fetch notifications here
  }

  render() {
    // Render notifications here
  }
}