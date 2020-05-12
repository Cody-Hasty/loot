const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    commented_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
        id: ""
    },
    date: {
        type: Date,
        default: Date.now
    }

});

Recipe = mongoose.model("Recipe", CommentSchema);

module.exports = Recipe;