const {Router} = require('express');
const express = require('express');
const router = Router();
const {JWT} = require('../config');
const {fetchuser} = require('../middleware/usermiddle')
const { User,todatas} = require('../db/dbschema');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const app = express();
app.use(cookieParser()); 
console.log('reachedddd here');

router.post('/signup',async(req,res)=>{

    // creating signup logic

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log("reached signup page successfully");
    // Checking if the user already exists
    // if already exist give the message otherwise store in database 

    const fuser = await User.findOne({
        email
    })

    if(fuser)
        {
            res.json({
                success:false,
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
            success:true,
            msg:"Account created Successfully"
        })

    }
})

router.post('/signin',async(req,res)=>{
    // some more validation need to be done
    // like if the user exist and if so is the password correct
    // creating signup logic

    console.log("reached signin page successfully");

    const email = req.body.email;
    const password = req.body.password;
    const users = await User.findOne({
        email
    })


    if(users)
    {
        console.log("successfully logged in")
        const passcompare = password === users.password;
        if(passcompare)
        {  
            const token = jwt.sign
            (
                email
            ,JWT)

            const x = localStorage.setItem("token1",token);

            // res.json
            // ({
            //     success:true,
            //     msg:token
            // })
            
            res.status(200)
            res.cookie("cookie",token
            // {httpOnly:true
            // secure:process.env.NOD_ENV==="production",
            // maxAge:1000,
            // signed:true,
            // }
        )
            res.json({
                success:true,
                token
            });
        }   
        else
        {
            res.json
            ({
                success:false,
                msg: "password incorrect"
            })
        }
    }
    else
    {
        res.json({
            success:false,
            msg:"No user found With the above credentials"
        })
    }
    
})

// end point for get the payload

router.get('/signinn',fetchuser,async (req,res)=>
{  
    // console.log(localStorage.getItem('token1'))
    // const token1 = req.headers.token;
    console.log("reached signnn")
    let userdata = await User.findOne({
     email:req.email
    })
      res.json({
        userdata
    })
    console.log(userdata)
    console.log(userdata.email)
})

// end point for sign out

// creating to add data to todo list

router.put('/additem',fetchuser,async(req,res)=>{

    const list = req.body.list;

let user = await User.findOne({
    email:req.email
})
email = req.email
console.log(email,list)


const result = await todatas.create({
    email,
    list
})
if(result)
    {
        res.json({
            success:true,
            msg:'Successfully updated data'
        })
    }
    else
    {
        res.json({
            success:false,
            msg:'Error in updating '
        })
    }

})

// creating end point to delete data to endpoint

router.post('/deleteitem',fetchuser,async (req,res)=>{

})

// creating endpoint to udate data to end point

router.post('/update',fetchuser,(req,res)=>{

})

// display all items 

router.get('/displaydata',fetchuser,async(req,res)=>{
    const userdata = await todatas.find({
        email:req.email
    })
    // console.log("Reached display data ",userdata[0].list);
    res.json(
        userdata
    )
})
module.exports = router;