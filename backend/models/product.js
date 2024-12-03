const {Schema, model} = require('../connection')

const productSchema = new Schema({
    title : String,
    brand : String,
    image : String,
    category : String,
    price : String,
});

module.exports = model('product', productSchema);