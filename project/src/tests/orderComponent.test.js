// This is the test for Order Component.

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import OrderComponent from '../components/OrderComponent';
import * as orderService from '../services/orderService';

test('renders order details', async () => {
    const order = { name: 'Test Order', description: 'This is a test order.' };
    orderService.getOrder = jest.fn().mockResolvedValue(order);

    const { getByLabelText, getByText } = render(<OrderComponent match={{ params: { id: '1' } }} />);

    await waitFor(() => getByText('Order Details'));
    
    expect(orderService.getOrder).toHaveBeenCalledWith('1');
    expect(getByLabelText('Order Name:')).toHaveValue(order.name);
    expect(getByLabelText('Order Description:')).toHaveValue(order.description);
});

test('saves order details', async () => {
    const order = { name: 'Test Order', description: 'This is a test order.' };
    orderService.getOrder = jest.fn().mockResolvedValue(order);
    orderService.saveOrder = jest.fn().mockResolvedValue();

    const { getByLabelText, getByText } = render(<OrderComponent match={{ params: { id: '1' } }} />);

    await waitFor(() => getByText('Order Details'));

    fireEvent.change(getByLabelText('Order Name:'), { target: { value: 'New Order' } });
    fireEvent.change(getByLabelText('Order Description:'), { target: { value: 'This is a new order.' } });

    fireEvent.click(getByText('Save'));

    await waitFor(() => expect(orderService.saveOrder).toHaveBeenCalled());
    expect(orderService.saveOrder).toHaveBeenCalledWith(expect.objectContaining({ name: 'New Order', description: 'This is a new order.' }));
});