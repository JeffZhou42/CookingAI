const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'get all recipes'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'get a single recipe'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'post a new recipe'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a recipe'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a recipe'})
})

module.exports = router