const {Router} = require('express');
const router = Router();
const {JWT} = require('../config');
const { User,todata } = require('../db/dbschema');
const jwt = require('jsonwebtoken');

router.post('/signup',async(req,res)=>{

    // creating signup logic

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // Checking if the user already exists
    // if already exist give the message otherwise store in database 

    const fuser = User.find({
        email
    })

    if(fuser)
        {
            res.json({
                msg:'User already exist'
            })
        }
    else
    {
        await User.create({
            email,
            username,
            password
        })
        
        res.json({
            msg:"Account created Successfully"
        })

    }
})

router.post('/signin',async(req,res)=>{

    // some more validation need to be done
    // like if the user exist and if so is the password correct
    // creating signup logic

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.find({
        email,
        password,
        username
    })
    if(user)
    {
        const passcompare = password=== user.password;
        if(passcompare)
        {
            const token = jwt.sign
            ({
                username
            },JWT)

            res.json
            ({
                token
            })

        }   
        else
        {
            res.json
            ({
                msg:"Invalid Credentials"
            })
        }
    }
    else
    {
        res.json({
            msg:"No user found With the above credentials"
        })
    }
    
})
module.exports = router;