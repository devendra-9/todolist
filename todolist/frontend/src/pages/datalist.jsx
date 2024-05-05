import React, { useState } from 'react'
import './css/detaiil.css'

const datalist = () => {


  const [data,setdata] = useState({
    todetails:''
  })

  const changehandler = (e)=>
    {
      setdata({...data,[e.target.name]:e.target.value})
    }

  const adddata =() =>
    {
      console.log('Your todo list is ',data)
      setdata('');
      // const x = document.getElementById("form");
      // x.reset();
    }
  
  return (
    <div className='details-main'>
      <div className="details-tog">
      <div className="details-input">
        <input name="todetails" value={data.todetails} onChange={changehandler} type="text" placeholder='Enter your text here' id="form"/>
        <button onClick={()=>adddata()}> Add To TODO</button>
      </div>
      <div className="display-todo">
      <h1>ALL TODS LIST</h1>
      </div>
      </div>
    </div>
  )
}

export default datalist