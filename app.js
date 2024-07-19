// // const { request } = require("express");
// const expressLayouts = require('express-ejs-layouts')
// const mongoose = require('mongoose')
// const express = require('express')


// const app = express()


// // Db config
// const db = require('./config/key').MongoURI

// // Connect to Mongo
// mongoose.connect(db, { userNewUrlParser: true, useUnifiedTopology: true })

//     .then(() => console.log('mongoose Connected'))
//     .catch(err => console.log(err))
// // EJS
// app.use(expressLayouts)
// app.set('view engine', 'ejs')

// // Routes
// app.use("/", require('./routes/index')),
//     app.use("/users", require('./routes/users'))
// // app.use("/login", require('./login'))


// const PORT = process.env.PORT || 5000

// app.listen(PORT, console.log(`Server is run on port 5000 ${PORT}`))

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

// Db config
const db = require('./config/key').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

