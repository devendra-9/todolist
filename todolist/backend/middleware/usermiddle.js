const jwt = require('jsonwebtoken');
const {JWT} = require('../config');
const zod = require('zod');




function fetchuser(req,res,next)
{
   // validating the user 
   // this is a middleware 
    const token = req.header.authorization;
    const words = token.split(" ");
    const jwttoken = words[1];
    const decodevalue = jwt.verify(jwttoken,JWT);
    if(decodevalue.email)
    {
        req.email = decodevalue.email;
        next();
    }    
    else
    {
        res.json({
            msg:"Not authenticated"
        })
    }

}

module.exports = {fetchuser};