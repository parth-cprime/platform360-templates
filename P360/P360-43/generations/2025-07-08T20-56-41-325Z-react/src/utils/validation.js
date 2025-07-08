import Joi from 'joi';

// Utilizes Joi for schema validation to ensure secure and validated input.
const validateLoginInput = (input) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(input);
};

export { validateLoginInput };