const mongoose = require('mongoose');

// connect to schemsa


const connstr = "mongodb+srv://admin:admin123@cluster0.cxvzrpo.mongodb.net/todolist"
const conn = mongoose.connect(connstr,{useNewUrlParser : true, useUnifiedTopology: true});
if(conn)
{
    console.log("connection successful");
}

// creating schemas for users login

const UserSchema = new mongoose.Schema
({
    // schemas defination here 

    email : String,
    username : String,
    password : String,
})

// creating schemas for the todolist data

const TodoDataSchema = new mongoose.Schema
({
    id:Number,
    email : String,
    list : Object,
})

const User = mongoose.model('User',UserSchema);
const todatas = mongoose.model('todatas',TodoDataSchema);

module.exports = { User,todatas}