import React, { useEffect, useState } from 'react'
import './css/detaiil.css'

const datalist = () => {


  const [listt,setlistt] = useState({
    list:""
  })

  const changehandler = (e)=>
    {
      setlistt({...listt,[e.target.name]:e.target.value})
    }

  const adddata =async () =>
    {
      console.log('Your todo list is ',listt);
      let responsedata;
      await fetch('http://localhost:4000/user/additem',{
        method:'PUT',
        headers:
        {
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(listt),
      })
      .then((response)=>response.json())
      .then((data)=>responsedata=data)
      if(responsedata.success)
        {
        setlistt({
        list:''
      });
      alert("successful")
      // const x = document.getElementById("form");
      // x.reset();
    }
    else
    {
      setlistt({
        list:''
      });
      alert("Something went wrong")
    }
  }
  
  return (
    <div className='details-main'>
      <div className="details-tog">
      <div className="details-input">
        <input name="list" value={listt.list} onChange={changehandler} type="text" placeholder='Enter your text here' id="form"/>
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