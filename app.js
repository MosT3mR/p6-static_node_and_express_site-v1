/******************************************
Treehouse FSJS Techdegree:
project 6 - Static Node.js and Express Site
Student : Othman Alomair
******************************************/
const express = require('express')
const app = express()

const path = require('path')
const {projects} = require('./data.json')

// setting up the middleware 
app.set('view engine', 'pug') // for the pug engine
app.use('/static', express.static(path.resolve(__dirname, './public'))) // serve the static files 

// Setting up the routes
const mainRoutes = require('./routes')
app.use(mainRoutes)

// Handle errors
app.use((req,res,next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) =>{
    res.locals.error = error
    res.status(error.status)
    res.render('error', error)
})

// listening to the port 3000
app.listen(3000,()=>{
    console.log('Server is listening to port 3000...')
})