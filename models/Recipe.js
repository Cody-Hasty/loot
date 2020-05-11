const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    used_in: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }],
    date: {
        type: Date,
        default: Date.now
    }

});

Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;