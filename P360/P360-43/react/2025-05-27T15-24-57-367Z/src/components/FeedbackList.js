import React from 'react';

const FeedbackList = ({ feedback }) => {
  return (
    <div>
      {feedback.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;