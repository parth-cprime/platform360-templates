// Import dependencies
import axios from 'axios';
import { handleErrors } from '../utils/errorHandler';

/**
 * OrderManagementAPI service: provides functions for interacting with the backend API.
 */
class OrderManagementAPI {
    constructor() {
        this.baseURL = process.env.REACT_APP_API_URL; // Base URL for the API
        this.token = localStorage.getItem('authToken'); // Get the JWT token from local storage
    }

    // Axios instance for making API requests
    axiosInstance = axios.create({
        baseURL: this.baseURL,
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    });

    // Fetch orders from the API
    fetchOrders = async () => {
        return this.axiosInstance.get('/orders')
            .then(response => response.data)
            .catch(handleErrors);
    }

    // More API methods here as needed...
}

export default new OrderManagementAPI();