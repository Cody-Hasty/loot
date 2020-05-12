const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = "Comment must not be blank";
    }

    if (Validator.isEmpty(data.user_id)) {
        errors.user_id = "User must exit";
    }

    if (Validator.isEmpty(data.commented_id)) {
        errors.commented_id = "What are you commenting on?";
    }



    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};