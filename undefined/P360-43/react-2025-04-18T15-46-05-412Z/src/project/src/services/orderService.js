```javascript
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// JWT token service
class OrderService {
    // Set the API base URL
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        });
    }

    // Set the JWT token
    setJwt(jwt) {
        this.api.defaults.headers.common['x-auth-token'] = jwt;
    }

    // Get the current user
    getCurrentUser() {
        try {
            const jwt = localStorage.getItem('token');
            return jwtDecode(jwt);
        } catch (ex) {
            return null;
        }
    }

    // API to fetch all orders
    async fetchOrders() {
        try {
            const response = await this.api.get('/order');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch orders', error);
            throw error;
        }
    }
}

const orderService = new OrderService();
export default orderService;
```