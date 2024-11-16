const express = require('express')
const Recipe = require('../models/recipeModel')
const {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController')

const router = express.Router()

router.get('/', getRecipes)

router.get('/:id', getRecipe)

router.post('/',  createRecipe)

router.delete('/:id', deleteRecipe)

router.patch('/:id', updateRecipe)

module.exports = router