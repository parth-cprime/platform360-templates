const Joi = require('joi');

// Input validation schema
const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required()
});

const validateUser = (user) => {
    return userSchema.validate(user);
};

module.exports = {
    validateUser
};