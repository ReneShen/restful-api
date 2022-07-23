const mongoose = require('mongoose');
const {Schema} = mongoose;

const userModel = new Schema(
    {
        name: {type: String},
        username: {type: String},
        email: {type: String},
        password: {type: String || null},
        address: {type: Object},
        phone: {type: String},
        website: {type: String},
        company: {type: Object},
        active: {type: Boolean, default: true},
    }
)

module.exports = mongoose.model('User',userModel);