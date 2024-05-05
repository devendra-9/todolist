const jwt = require('jsonwebtoken');
const {JWT} = require('../config');
const zod = require('zod');




// function fetchuser(req,res,next)
// {
   // validating the user 
   // this is a middleware 
    // const toke1 = req.headers.token;
    // console.log(toke1);
    // const words = token.split(" ");
    // const jwttoken = words[1];
    // const decodevalue = jwt.verify(jwttoken,JWT);
    // if(decodevalue.email)
    // {
    //     // req.email = decodevalue.email;
    //     next();
    // }    
    // else
    // {
    //     res.json({
    //         msg:"Not authenticated"
    //     })
    // }

// }

const fetchuser = async (req,res,next)=>
{
    console.log("reached middleware")
    // const token2 = req.headers.token;
    const token2 = localStorage.getItem('token1')
    // const token2 = req.cookies; 
    console.log(token2);
    if(!token2)
    {
        res.status(401)
        .send
        ({
            msg:"No token found"
        })
    }
    else
    {
        try
        {
            const data = jwt.verify(token2,JWT);
            req.email = data;   
            next();
        }
        catch(error)
        {
            res.status(401)
            .send
            ({
                msg:"No token found"
            })
        }
    }
}


module.exports = {fetchuser};