import React from 'react'
import './css/navv.css'

const navbar = () => {
  return (
    <div className='navbar-main'>
      <div className="navbarlogo">
        <p>TODO LIST</p>
      </div>
      <div className="navbutton">
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default navbar