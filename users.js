const express = require('express')

const router = express.Router()
// Loin Page
router.get('/login', (req, res) => res.send('login'))

// register pages
router.get('/register', (req, res) => res.send('register'))

module.exports = router