const {Router} = require('express');
const router = Router();
const { signupmiddle , signinmiddle} = require('../middleware/usermiddle')
const { User,todata } = require('../db/dbschema');
const jwt = require('jsonwebtoken');

router.post('/signup',signupmiddle,async(req,res)=>{

    // creating signup logic

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await User.create({
        email,
        username,
        password
    })

    res.json({
        msg:"Account created Successfully"
    })

})

router.post('/signin',signinmiddle,async(req,res)=>{

    // some more validation need to be done
    // like if the user exist and if so is the password correct
    // creating signup logic

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if(user)
    {

    }
    else
    {
        res.json({
            msg:"No user found With the above credentials"
        })
    }
    
})
module.exports = router;