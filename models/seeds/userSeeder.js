const db = require('../../config/mongoose')
const users = require('../../user.json').results
const User = require('../user')

db.once('open', () =>{
    for(let i = 0; i < users.length; i++){
        let newUser = {
            firstName: users[i].firstName,
            email: users[i].email,
            password: users[i].password
        } 
        console.log(newUser)
        User.create(newUser)
    }
    console.log('done')
})