// const { request } = require("express");

const express = require('express')

const app = express()

app.use("/", require('./index')),
    app.use("/users", require('./users'))
// app.use("/login", require('./login'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is run on port 5000 ${PORT}`))


