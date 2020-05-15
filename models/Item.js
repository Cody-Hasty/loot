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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }
    
});

Item = mongoose.model("Item", ItemSchema);

module.exports = Item;