import React, { useContext, useEffect, useState } from 'react'
import './css/detaiil.css'
import {Todocontext} from '../../contextpage/todocontext'

const datalist = () => {

  const { adddata } = useContext(Todocontext);

  const [listt,setlistt] = useState({
    list:""
  })

  const [details,setdetails] = useState([]);
  const [dlength,setdlength] = useState();
  let newdata;

  const changehandler = (e)=>
    {
      setlistt({...listt,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
      console.log("reached the display login");
      fetch('http://localhost:4000/user/displaydata')
      .then((response)=>response.json())
      .then((data)=>{
          console.log("display main : some data is here",data.length);
          setdlength(data.length);
          setdetails(data);
      })

    },[])
    console.log("reached the main page",details)
    console.log("the length is ",dlength)

  const adding = () =>
    {
      adddata(listt);
      
    }
  
  return (
    <div className='details-main'>
      <div className="details-tog">
      <div className="details-input">
        <input name="list" value={listt.list} onChange={changehandler} type="text" placeholder='Enter your text here' id="form"/>
        <button onClick={()=>adding()}> Add To TODO</button>
      </div>
      <div className="display-todo">
      <h1>ALL TODS LIST</h1>
      </div>
      <div className='displaydetails'>
        {dlength==0? 
         <h1> No Record Found </h1>
         : 
         details.map(details=>(<div className='aligndata'>
         <p>{details.list}</p>
         <button>Mark as Complete</button></div>
        ))
         }
      </div>
      </div>
    </div>
  )
}

export default datalist