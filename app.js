// const { request } = require("express");
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const express = require('express')

const app = express()

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
const db = require('./config/key').MongooseURI

// Routes
app.use("/", require('./routes/index')),
    app.use("/users", require('./routes/users'))
// app.use("/login", require('./login'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is run on port 5000 ${PORT}`))


