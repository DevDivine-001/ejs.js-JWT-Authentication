
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path to your User model



// Register Page
router.get('/register', (req, res) => res.render('register'));

// Login page

router.get('/login', (req, res) => res.render('login'))

// Register Handle
router.post('/register', async (req, res) => {
    const { name, username, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !username || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            username,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        try {
            const user = await User.findOne({ email: email });
            if (user) {
                // User exists
                errors.push({ msg: 'Email is already registered' });
                res.render('register', {
                    errors,
                    name,
                    username,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({
                    name,
                    username,
                    email,
                    password
                });

                // Hash Password
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    // Set password to hashed
                    newUser.password = hash;

                    // Save user
                    newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in');
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err));
                }));
            }
        } catch (err) {
            console.log(err);
            res.render('register', {
                errors: [{ msg: 'Something went wrong, please try again.' }],
                name,
                username,
                email,
                password,
                password2
            });
        }
    }
});

module.exports = router;

