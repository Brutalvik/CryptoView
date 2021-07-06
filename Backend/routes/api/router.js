const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');

const db = require('../DB')


router.get('/', (req, res) => {
 db.query('SELECT * FROM users',
  (err, users) => {
      if (err) throw err;
      res.json(users)
  })
})

//Get Single User based on ID
router.get('/:userID', (req, res) => {
    db.query(`SELECT * FROM users WHERE userID=${req.params.userID}`,
    (err, users) => {
        if (err) throw err;
        const found = users.some(user => user.userID === parseInt(req.params.userID))
        found ? res.json(users) : res.status(400).json(`User with ID ${req.params.userID} not found !`)
    }
    )
   })

//Login User
router.post('/login', async(req, res) => {
    const loginUser = {
        email: req.body.email,
        password: req.body.password
    }
    

    db.query(`SELECT * FROM users WHERE email='${loginUser.email}'`, (err, users) => {
        if (err) throw err;
        let encrpyted = "";
        const found = users.some(user => user.email === loginUser.email)
        users.find(user => encrpyted = user.password)
        found ?
        bcrypt.compare(loginUser.password, encrpyted, (err, result) => {
            if (err) throw err;
            result ? res.json('Login Success') : res.status(400).json('Bad Password')

        })
        : res.status(400).json('No User Found')
    })
    
})

//Add User
router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => 
    {
        if (err) throw err;
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            status: 1
        }
    
       
    
        if(!newUser.name || !newUser.email || !newUser.password)
        {
            return res.status(400).json('Please enter all Information!')
        }
    
        db.query(`INSERT INTO users (name, email, password, status) 
        VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}', ${newUser.status})`, 
                (err) => {
                    if (err) throw err;
                    res.json('User Registered Successfully')
                })
    })
})


//Delete User

router.delete('/delete/:userID', (req, res) => {
    db.query(`DELETE FROM users WHERE userID=${req.params.userID}`, (err, users) => {
        if (err) throw err;
        res.json('User Deleted Successfully');
    }
    )
})

module.exports = router;