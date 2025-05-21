export const loginUser = async (username, password) => {
  // This is a mock implementation. In a real-world scenario, you would make an API request here.
  if (username === 'admin' && password === 'password') {
    return { username, token: 'fake-jwt-token' };
  }
  throw new Error('Invalid credentials');
};