const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    used_in: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],

});

Item = mongoose.model("Item", ItemSchema);

module.exports = Item;