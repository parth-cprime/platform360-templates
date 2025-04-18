// Import necessary libraries
import React, { useState } from "react";
import Joi from "joi-browser";
import authService from "../services/authService";

// Define LoginForm component
const LoginForm = () => {
    const [account, setAccount] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});

    // Define validation schema
    const schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    // Function to validate form
    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(account, schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();
        setErrors(errors || {});
        if (errors) return;

        try {
            await authService.login(account.username, account.password);
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...errors };
                errors.username = ex.response.data;
                setErrors(errors);
            }
        }
    };

    // Render form
    return (/* JSX code for form */);
};

// Export LoginForm component
export default LoginForm;