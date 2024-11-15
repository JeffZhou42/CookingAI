require('dotenv').config()

const express = require("express")
const recipeRoutes = require('./routes/recipes')

//creates express app
const app = express()

//middleware 
app.use(express.json())

//logs path and request
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/recipes', recipeRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})