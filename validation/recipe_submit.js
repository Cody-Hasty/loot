const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRecipeInput(data) {
    let errors = {};

    data.label = validText(data.label) ? data.label : '';



    if (Validator.isEmpty(data.label)) {
        errors.label = "Label must not be blank" ;
    }

    if (Validator.isEmpty(data.item)) {
        errors.label = "Item cannot be blank";
    }

    // if (Validator.isEmpty(data.ingredients)) {
    //     errors.ingredients = "A recipe must have ingredients";
    // }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};