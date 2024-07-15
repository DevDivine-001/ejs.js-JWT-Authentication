const express = require('express')

const router = express.Router()
// Loin Page
router.get('/login', (req, res) => res.render('login'))

// register pages
router.get('/register', (req, res) => res.render('register'))

module.exports = router