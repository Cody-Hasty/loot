const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: Object,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    game_id:{   
        type: String,
    },
    recipes: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        }
    ]
});

Item = mongoose.model("Item", ItemSchema);

module.exports = Item;