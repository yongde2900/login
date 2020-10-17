// Include package and define related server varibles
const express = require('express')
const exhdb = require('express-handlebars')
const bodyParse = require('body-parse')
const port = 3000
const app = express()
require('./config/mongoose')

// Setting template engine
app.engine('hbs', exhdb({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParse.urlencoded({extended: true}))

// Setting routes
app.get('/', (req, res) =>{
    res.render('index')
})

// Start the express sweb and listen for connection
app.listen(port,() =>{
    console.log(`Server is listening on http://localhost:${port}`)
})