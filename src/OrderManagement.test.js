import React from 'react';
import { render, waitFor } from '@testing-library/react';
import OrderManagement from './OrderManagement';
import axios from 'axios';

jest.mock('axios');

test('fetches and displays orders', async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: 'Order 1' },
      { id: 2, name: 'Order 2' },
    ],
  });

  const { getByText } = render(<OrderManagement />);

  await waitFor(() => expect(getByText('Order 1')).toBeInTheDocument());
  expect(getByText('Order 2')).toBeInTheDocument();
});