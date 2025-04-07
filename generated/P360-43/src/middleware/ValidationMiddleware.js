```javascript
// src/middleware/ValidationMiddleware.js

const Joi = require('joi');

const orderSchema = Joi.object({
  customerName: Joi.string().required(),
  email: Joi.string().email().required(),
  products: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).required(),
  totalAmount: Joi.number().required(),
  status: Joi.string().valid('pending', 'processing', 'shipped', 'delivered')
});

const validateCreateOrder = (orderData) => {
  return orderSchema.validateAsync(orderData);
};

const validateUpdateOrder = (orderData) => {
  return orderSchema.partial().validateAsync(orderData);
};

module.exports = {
  validateCreateOrder,
  validateUpdateOrder
};
```

Description: The `ValidationMiddleware` defines Joi validation schemas for creating and updating orders. It exports validation functions that can be used to validate request data.

This project structure follows the guidelines provided in the templates and includes the necessary components for building a secure and well-structured order management API using React.