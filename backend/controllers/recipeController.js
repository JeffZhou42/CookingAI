const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

//get all recipies
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1})
    res.status(200).json(recipes)
}

//get a single recipe
const getRecipe = async (req, res) => {

    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such recipe"})
    }

    const recipe = await Recipe.findById(id)
    if (!recipe) {
        return res.status(400).json({error: 'no such recipe'})
    }
    res.status(200).json(recipe)
}


//create a new recipe
const createRecipe = async (req, res) => {
    const {title, author, steps} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!author) {
        emptyFields.push('author')
    }
    if (!steps) {
        emptyFields.push('steps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    //add doc to db
    try {
        const recipe = await Recipe.create({title, author, steps})
        res.status(200).json(recipe)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a recipe
const deleteRecipe = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such recipe"})
    }

    const recipe = await Recipe.findOneAndDelete({_id: id})
    if (!recipe) {
        res.status(400).json({error: 'no such recipe'})
    }
    res.status(200).json(recipe)
}


//update a recipe
const updateRecipe = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such recipe"})
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!recipe) {
        res.status(400).json({error: 'no such recipe'})
    }
    res.status(200).json(recipe)
        
}


module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}