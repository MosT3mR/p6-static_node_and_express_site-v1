/******************************************
Treehouse FSJS Techdegree:
project 6 - Static Node.js and Express Site
Student : Othman Alomair
******************************************/
const express = require('express')
const app = express()

const path = require('path')
const data = require('./data.json')
const projects = {data}

// setting up the middleware 
app.set('view engine', 'pug') // for the pug engine
app.use('/static', express.static(path.resolve(__dirname, './public'))) // serve the static files 

// Setting up the routes
app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

// listening to the port 3000
app.listen(3000,()=>{
    console.log('Server is listening to port 3000...')
})