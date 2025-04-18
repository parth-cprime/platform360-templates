import Joi from 'joi';

// define validation schema
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  email: Joi.string().email().required()
});

// validate user input
export function validateUserInput(input) {
  const { error } = userSchema.validate(input);
  if (error) {
    console.error('User Input Validation Failed:', error.details[0].message);
    return false;
  }
  return true;
}