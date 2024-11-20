const {Schema, model} = require('../connection')

const productSchema = new Schema({
    title : String,
    description : String,
    image : String,
    category : String,
    prize : String,
});

module.exports = model('product', productSchema);