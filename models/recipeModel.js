const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipeModel = new Schema(
    {
        itemName: {type: String},
        ingredients: {
            mainIngredients: {type: Array},
            sauces: {type: Array},
            addOns: {type: Array},
            secret: {type: String},
          },
        notes: {type: String},
    }
)

module.exports = mongoose.model('Recipe',recipeModel);