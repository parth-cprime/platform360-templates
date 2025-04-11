import React from 'react';

const Feedback = ({ feedback, acknowledgeFeedback }) => {
  return (
    <div key={feedback.id}>
      <p>{feedback.message}</p>
      <button onClick={() => acknowledgeFeedback(feedback.id)}>Acknowledge</button>
    </div>
  )
}

export default Feedback;