// This is the main application file

import React from 'react';
import ErrorHandler from './components/ErrorHandler';
import api from './services/api';
import { logError } from './utils/logger';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    api.get('/test-endpoint')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        this.setState({ error });
        logError(error);
      });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        {error && <ErrorHandler error={error} />}
        // App components goes here
      </div>
    );
  }
}

export default App;