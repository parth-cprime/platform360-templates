// Test for App component

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Order Management System/i);
  expect(linkElement).toBeInTheDocument();
});