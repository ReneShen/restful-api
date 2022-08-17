const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemModel = new Schema(
    {
        itemName: {type: String},
        category: {type: String},
    }
)

module.exports = mongoose.model('Item',itemModel);