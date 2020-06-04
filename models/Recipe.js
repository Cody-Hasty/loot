const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    label: {
        type: String,
        required: true,
    },

    item: {
        type: String
    },
    
    //{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Item",
   
    ingredients: {
        type: String
    },
    
    
    //[{
    //     amount: "",
    //     ingredient: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "",
    //     },
    // }],
    picture: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;