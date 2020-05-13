const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pictures: [{
        url: "",
    }],
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    game_id:{
        type: String,
        required: true
    }
    
});

Item = mongoose.model("Item", ItemSchema);

module.exports = Item;