```javascript
// src/services/OrderService.js

const Order = require('../models/Order');

class OrderService {
  async createOrder(orderData) {
    const order = new Order(orderData);
    await order.save();
    return order;
  }

  async getOrderById(orderId) {
    return Order.findById(orderId);
  }

  async updateOrder(orderId, orderData) {
    return Order.findByIdAndUpdate(orderId, orderData, { new: true });
  }

  async deleteOrder(orderId) {
    return Order.findByIdAndDelete(orderId);
  }
}

module.exports = new OrderService();
```

Description: The `OrderService` class implements the business logic for order management. It interacts with the `Order` model to perform database operations.