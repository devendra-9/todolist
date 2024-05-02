const jwt = require('jsonwebtoken');
const {JWT} = require('../config');
const zod = require('zod');




// function fetchuser(req,res,next)
// {
//    // validating the user 
//    // this is a middleware 
//     const token = req.header.authorization;
//     const words = token.split(" ");
//     const jwttoken = words[1];
//     const decodevalue = jwt.verify(jwttoken,JWT);
//     if(decodevalue.email)
//     {
//         // req.email = decodevalue.email;
//         next();
//     }    
//     else
//     {
//         res.json({
//             msg:"Not authenticated"
//         })
//     }

// }


const fetchuser = async (req,res,next)=>
{
    console.log("reached middleware")
    // const token = req.header('auth-token');
    const token2 = req.header.token;
    console.log(token2)
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
            const data = jwt.verify(token,JWT);
            req.user = data.user;
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