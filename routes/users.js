const express = require('express')

const router = express.Router()
const bcrypt = require('bcryptjs')

// User model
const User = require('../models/User')
// Loin Page
router.get('/login', (req, res) => res.render('login'))

// register pages
router.get('/register', (req, res) => res.render('register'))

// Register Handle
router.post('/register', (req, res) => {
    // console.log(req.body)
    // res.send('hello')
    const { name, email, password, password2 } = req.body;
    let errors = []

    // check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' })
    }
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' })
    }
    // Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' })
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })


    } else {
        // res.send('pass')
        // Validation passed
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    errors.push({ msg: 'Email is already registered' })
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    })
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    console.log(newUser)
                    res.send('hello')

                }
            });
    }
})

module.exports = router