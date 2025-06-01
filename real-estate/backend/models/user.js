// const mongoose = require('mongoose');
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        required: true  
    }

})

const User = mongoose.model('user', userSchema);

export default  User;