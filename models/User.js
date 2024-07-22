// const mongoose = require('mongoose')
// // import mongoose from "mongoose"

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// })

// const User = mongoose.model(`User`, UserSchema)
// module.exports = User




const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Users", userSchema);
// export default User


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true, // Ensures email uniqueness
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
