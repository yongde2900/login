// Include package and define related server varibles
const express = require('express')
const exhdb = require('express-handlebars')
const bodyParser = require('body-parser')
const Users = require('./models/user')
const port = 3000
const app = express()
require('./config/mongoose')

// Setting template engine
app.engine('hbs', exhdb({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

// Setting routes
app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/users', (req, res) => {
    const { email, password } = req.body
    return Users.findOne({email:email})
        .lean()
        .then( user => {
            if (user.password === password){
                res.render('welcome', {user})
            }else{
                res.render('index', {wrong:'wrong'})
            }
        })
        .catch(error => {
            res.render('index', {wrong:'wrong'})
        })
})

// Start the express sweb and listen for connection
app.listen(port,() =>{
    console.log(`Server is listening on http://localhost:${port}`)
})