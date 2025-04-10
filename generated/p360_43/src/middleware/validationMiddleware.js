const Joi = require('joi');
const { ValidationError } = require('../utils/errors');

const feedbackSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  urgent: Joi.boolean().default(false) 
});

const validationMiddleware = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  
  next();
};

module.exports = {
  validationMiddleware,
  feedbackSchema
};

// The validationMiddleware is a factory function that takes a Joi schema and
// returns a middleware function. The generated middleware validates the request
// body against the provided schema. If validation fails, it raises a ValidationError.
// The feedbackSchema is used to validate the /submit-feedback endpoint.