/**
 * Mock service to simulate fetching order fallout data.
 * Replace this with your actual API call logic.
 */
export const fetchOrderFalloutData = async () => {
    // Simulated delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated data
    return {
        status: 'success',
        data: [
            { orderId: '1234', status: 'failed', reason: 'Payment declined' },
            { orderId: '5678', status: 'failed', reason: 'Inventory unavailable' },
        ],
    };
};