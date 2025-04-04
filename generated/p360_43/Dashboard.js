import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeedback } from './api';

const Dashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedback();
        setFeedback(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Feedback Dashboard</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            <Link to={`/feedback/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
