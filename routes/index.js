const express = require('express')
const router = express.Router()
const {projects} = require('../data.json')


router.get('/', (req,res) => {
    res.render('index', {projects})
})

router.get('/about', (req,res) => {
    res.render('about')
})

router.get('/project/:id', (req,res) => {
    const projectShow = projects.find(({id}) => id === Number(req.params.id))
    if(!projectShow){
        const error = new Error('Page is not found !!')
        error.status = 404
        res.locals.error = error
        res.status(error.status)
        res.render('page-not-found.pug', error)
        return
    }
    res.render('project', {projectShow})
})

module.exports = router