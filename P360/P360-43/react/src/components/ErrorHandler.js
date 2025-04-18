// This component handles error by logging them and showing an error message to the user

import React from 'react';
import PropTypes from 'prop-types';

function ErrorHandler({ error }) {
  console.error(error); // log error

  return (
    <div>
      <h2>Error</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  );
}

ErrorHandler.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorHandler;