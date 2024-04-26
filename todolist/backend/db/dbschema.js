const mongoose = require('mongoose');

// connect to schemsa

const connstr = "mongodb+srv://admin:admin123@cluster0.cxvzrpo.mongodb.net/todolist"

// creating schemas for users login

const UserSchema = new mongoose.Schema
({
    // schemas defination here 

    email : String,
    username:String,
    password:String
})

// creating schemas for the todolist data

const TodoDataSchema = new mongoose.Schema
({
    email : String,
    list : String,
})

const User = mongoose.model('User',UserSchema);
const todata = mongoose.model('todata',TodoDataSchema);

module.export = { User,todata}