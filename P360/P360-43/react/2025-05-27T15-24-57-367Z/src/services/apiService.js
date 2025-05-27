const API_BASE_URL = '/api';

export async function fetchFeedback() {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
}

export async function login(username, password) {
  // Placeholder for actual login implementation
  console.log('Logging in', username, password);
  // Return a promise that simulates an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}