import { fetchUrgentFeedback, acknowledgeFeedback } from '../services/feedbackService';
import axios from 'axios';

jest.mock('axios');

describe('FeedbackService', () => {
    it('fetches urgent feedback', async () => {
        const mockData = [{ id: 1, message: 'Urgent issue', status: 'pending' }];
        axios.get.mockResolvedValueOnce({ data: mockData });

        const data = await fetchUrgentFeedback();
        expect(data).toEqual(mockData);
    });

    it('acknowledges feedback', async () => {
        axios.post.mockResolvedValueOnce({});

        await expect(acknowledgeFeedback(1)).resolves.toBeUndefined();
    });
});