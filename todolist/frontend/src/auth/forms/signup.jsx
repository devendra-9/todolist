import React from 'react'
import "./css/signn.css"

const signup = () => {
  return (
    <div className='main-signin'>
    <div className="signinimages">
     <img src="../public/clock4.jpg" alt="" />
   </div>
   <div className="signin-form">
     <div className="signin-formdetails">
       <h1>Sign UP</h1>
       <label>Email</label><br/>
       <input type="text" placeholder='Email'/><br /><br />
       
       <label>Password</label><br/>
       <input type="password" placeholder='Password'/><br /><br />
       <button>Sign in </button>
       <div className='signin-links'>
         <p>Forgot password</p>
         <p>Sign in</p>
       </div>
     </div>
   </div>
  
 </div>
  )
}

export default signup