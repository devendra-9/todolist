import React from 'react'
import './css/detaiil.css'

const datalist = () => {

  
  return (
    <div className='details-main'>
      <div className="details-tog">
      <div className="details-input">
        <input type="text" placeholder='Enter your text here'/>
        <button> Add To TODO</button>
      </div>
      <div className="display-todo">
      <h1>ALL TODS LIST</h1>
      </div>
      </div>
    </div>
  )
}

export default datalist