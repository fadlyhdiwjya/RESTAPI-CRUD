const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    harga: Number
})

const products = mongoose.model('products', productSchema);

module.exports = products;