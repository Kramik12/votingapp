const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");

//Define the person schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{ 
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    nagakritaNumber: {
         type: Number,
         required: true,
         unique: true
    },
    password: {
        required: true,
        type: String
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        default: false

    }
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;