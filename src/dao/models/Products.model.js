const mongoose = require('mongoose')

const productCollection = 'product'

const productSchema = new mongoose.Schema({
    tittle: String,
    description: String,
    price: Number
})

const Product = mongoose.model(productCollection,productSchema)

module.exports = Product