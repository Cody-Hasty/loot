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
    game_id:{   //this needs to be changed to a ref?-dan 5/14
        type: String,
        required: true
    }
    
});

Item = mongoose.model("Item", ItemSchema);

module.exports = Item;