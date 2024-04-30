import React, { useState } from 'react'
import './css/signn.css'
import { Navigate, useNavigate,Link } from 'react-router-dom';

const signup = () => {
  const [formdata, setformdata] = useState({
    email:"",
    username:"",
    password:""
  })
  const navigate = useNavigate();

  const changehandler=(e)=>
  {
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const login = async ()=>
  {
    if(formdata.email==" ")
    {
      document.getElementById("error").innerHTML="This input field is required";
    }
    else if(formdata.password==" ")
    {

    }
    else
    {
      console.log("executed successfully");
      console.log(formdata.email)
      console.log(formdata.password)
      var responsedata;
      await fetch('http://localhost:4000/user/signup',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata)
      })
      .then((response)=>response.json())
      .then((data)=>responsedata=data)

      if(responsedata.success)
        {
          localStorage.setItem('auth-token',responsedata.token)
          console.log("logged in successful");
          alert("Welcome!! Now you will be forwarded to login page")
          navigate('/');
        }
        else
        {
          // alert(responsedata.error)
          document.getElementById("error").innerHTML="User Already exist, Please Login";
        }

      
      
    }
   
    
  }

  return (
    <div className='main-signin'>
       <div className="signinimages">
        <img src="/clock4.jpg" alt="" />
      </div>
      <div className="signin-form">
        <div className="signin-formdetails">
          <p id="error"> </p>
          <h2>TODO LIST</h2>
          <h1>Sign up</h1>
          <label>Email</label><br/>
          <input id="e1`" value={formdata.email} onChange={changehandler} name='email' type="text" placeholder='Email'/><br /><br />
          <label>Username</label><br/>
          <input id="e1`" value={formdata.username} onChange={changehandler} name='username' type="text" placeholder='Username'/><br /><br />
          <label>Password</label><br/>
          <input name="password" value={formdata.password} onChange={changehandler} type="password" placeholder='Password'/><br /><br />
          <button onClick={()=>login()}>Sign up </button>
          <div className='signin-links'>
            <p>Forgot password</p>
            <Link to='/' style={{textDecoration:'none'}}><p>Sign in</p></Link>
          </div>
        </div>
      </div>
     
    </div>
  )



}

export default signup