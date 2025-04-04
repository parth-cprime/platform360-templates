import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFeedbackById, updateFeedback } from './api';

const Feedback = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedbackById(id);
        setFeedback(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [id]);

  const handleAcknowledge = async () => {
    try {
      await updateFeedback(id, { acknowledged: true });
      setFeedback({ ...feedback, acknowledged: true });
    } catch (err) {
      setError(err.message);
    }
  };

  if (!feedback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{feedback.title}</h1>
      {error && <div className="error">{error}</div>}
      <p>{feedback.description}</p>
      {!feedback.acknowledged && (
        <button onClick={handleAcknowledge}>Acknowledge</button>
      )}
    </div>
  );
};

export default Feedback;
