const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    recipe_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }]

});

Recipe = mongoose.model("Recipe", CommentSchema);

module.exports = Recipe;