const jwt = require('jsonwebtoken');
const {JWT} = require('../config');
const zod = require('zod');




function signupmiddle(req,res,next)
{
    // tring validation 
    const email = zod.string.email();
    const password = zod.string.min(6);
    const token = req.header.authorization;
    const words = token.split("");
    const jwttoken = words[1];
    
}
function signinmiddle(req,res,next)
{
    console.log("reached on signin middleware");
}

module.exports = { signinmiddle,signupmiddle};