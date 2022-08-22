const mongoose = require('mongoose');
const {Schema} = mongoose;

const userModel = new Schema(
    {
        name: {type: String},
        userName: {type: String},
        email: {type: String},
        password:{type: String},
        address: {
            street: {type: String},
            city: {type: String},
            ocean: {type: String},
        },
        businessName: {type: String},
        jobTitle: {type: String},
        active: {type: Boolean, default: true},
    }
)

module.exports = mongoose.model('User',userModel);