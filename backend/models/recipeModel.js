const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    steps: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)