import React from 'react'
import './css/navv.css'
import { useNavigate } from 'react-router-dom';

const navbar = () => {
  const navigate = useNavigate();


  

  const details = localStorage.getItem('auth-token');
  console.log("The token is before clearing  ",details);

  function logout()
  {
  localStorage.clear('auth-token');
  const details2 = localStorage.getItem('auth-token');
  console.log("after clearing data ", details2)
  navigate("/");
  }
  

  return (
    <div className='navbar-main'>
      <div className="navbarlogo">
        <p>TODO LIST</p>
      </div>
      <div className="navbutton">
        <button>Edit Profile</button>
        <button onClick={()=>logout()}>Logout</button>
      </div>
    </div>
  )
}

export default navbar