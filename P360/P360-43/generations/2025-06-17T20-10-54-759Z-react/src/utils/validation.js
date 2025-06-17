import Joi from 'joi';

/**
 * Validation Utilities
 * Provides functions and schemas for input validation.
 */

// User login schema
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

/**
 * Validate user login data.
 * @param {Object} data - The user data to validate.
 * @returns {Object} The Joi validation result.
 */
export const validateLogin = (data) => {
    return loginSchema.validate(data);
};