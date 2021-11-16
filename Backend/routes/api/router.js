require('dotenv').config()
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../DB')

let globalEncrypted = "";


//Register User
router.post('/register', (req, res) => {

    if(req.body.password === "") {
        return res.status(400).json("Error: Password must be provided")
    }

    bcrypt.hash(req.body.password, 10, (err, hash) => 
    {
        if (err) throw err;
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            active: 1
        }
    
        if(!newUser.name || !newUser.email || !newUser.password)
        {
            return res.status(400).json("Attention: Please enter all Information!")
        }
    
        db.query(`INSERT INTO users (name, email, password, active) 
        VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}', ${newUser.active})`, 
                (err) => {
                    if (err) throw err;
                    res.json('User Registered Successfully')
        })
    })
})

//Login User
router.post('/login', async(req, res) => {
    const loginUser = {
        email: req.body.email,
        password: req.body.password
    }
    db.query(`SELECT * FROM users WHERE email='${loginUser.email}'`, (err, users) => {
        if (err) throw err;
        let encrypted = "";
        const found = users.some(user => user.email === loginUser.email)
        users.find(user => encrypted = user.password)
        globalEncrypted = encrypted;
        found ?
        bcrypt.compare(loginUser.password, encrypted, (err, result) => {
            if (err) throw err;
            result ? 
            jwt.sign({loginUser}, encrypted, {expiresIn: '1000000s'}, (err, token) => {
                if (err) throw err
                res.json(token);
            })
            : res.status(400).json('Bad Password')

        })
        : res.status(400).json('No User Found')
    })  
})


//Dashboard

router.get('/dashboard/:id', authenticateToken,  (req, res) => {
    
jwt.verify(req.token, globalEncrypted, (err, authData) => {
    if (err)
    {
        res.sendStatus(403)
    }
    else
    {
        const email = authData.loginUser.email
        db.query(`SELECT * FROM users WHERE email='${email}'`, (err, users) => {
            if (err) throw err;
            const found = users.some(user => user.email === email)
            var selectedUser = users.find(user => selectedUser = user)
            found ?
            res.json(`Welcome ${selectedUser.name}`)
            : res.json({Msg: 'Welcome Guest'})
        }) 
    }
})
    
})


//Middleware Authentication
function authenticateToken (req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]
        req.token = token
        next();
    }
    else {
       res.sendStatus(403)
    }   
}


// //Delete User

// router.delete('/delete/:userID', (req, res) => {

//     const userID = req.body.userID

//     db.query(`DELETE FROM users WHERE userID='${userID}'`, (err, users) => {
//         if (err) throw err;
//         res.json({msg: 'user deleted'})
//     })
// })

module.exports = router;