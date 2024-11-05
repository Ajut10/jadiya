const mongoose = require('mongoose')

const categoryScehma = mongoose.Schema({
    name: String,
    description: String
})
module.exports = mongoose.model('Category', categoryScehma)