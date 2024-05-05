import React, { useEffect, useState } from 'react'
import './css/navv.css'
import { useNavigate } from 'react-router-dom';

const navbar = () => {
  const navigate = useNavigate();
  const [user,setuser] = useState(
    {
    id:'',
    email:'',
    username:'',
    password:'',
    v:''
  }
)  
  let newuser;
    useEffect(()=>{
    fetch('http://localhost:4000/user/signinn')
   .then((response)=>response.json())
   .then(data=>
    {
      console.log("some data is here",data);
      newuser=data.userdata;
      console.log("Stored in new variable",newuser)
      setuser(newuser)
    }
   )
    },[])

    console.log("the username is ",user.username)

  const details = localStorage.getItem('token');
  console.log("The token is before clearing  ",details);

  function logout()
  {
  localStorage.clear('auth-token');
  const details2 = localStorage.getItem('auth-token');
  console.log("after clearing data ", details2)
  navigate("/");
  // console.log("cookies after clearing cookies")
  // const x = document.cookie.remove("token")
  // console.log(x)
  }
  

  return (
    <div className='navbar-main'>
      <div className="navbarlogo">
        <p>TODO LIST</p>
      </div>
      <div className="navbutton">
        <button>{user.username}</button>
        <button onClick={()=>logout()}>Logout</button>
      </div>
    </div>
  )
}

export default navbar