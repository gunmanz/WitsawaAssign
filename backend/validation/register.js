const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // username checks
    if (Validator.isEmpty(data.username)) {
        errors.name = "Username field is required";
    }
    // password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    } else if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = "Confirm password field is required";
    } else if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = "Passwords not match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
