import React from 'react';
import useFetch from '../hooks/useFetch';

// Dashboard component for displaying feedback
const Dashboard = () => {
  const { response, error, isLoading } = useFetch('/feedbacks', {});

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      {response.map(feedback => (
        <div key={feedback.id}>
          <h2>{feedback.title}</h2>
          <p>{feedback.body}</p>
          <button>Mark as Read</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;