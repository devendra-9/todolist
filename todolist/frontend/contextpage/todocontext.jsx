import React , { Children, createContext, useEffect } from "react";

export const Todocontext = createContext(null);

const Todocontextprovider = (props) =>
    {
        // const display = () =>
        //     {
        //         let newdata;
        //         console.log("reached the display login");
        //         fetch('http://localhost:4000/user/displaydata')
        //         .then((response)=>response.json())
        //         .then((data)=>{
        //             console.log("display : some data is here",data);
        //             newdata = data;
        //             if(newdata)
        //                 {
        //                     return newdata;
        //                 }
        //                 else
        //                 {
        //                     return null;
        //                 }
        //         })

        //     }
        
        const adddata =(listt) =>
            {
              console.log('Your todo list is ',listt);
              let responsedata;
              fetch('http://localhost:4000/user/additem',{
                method:'PUT',
                headers:
                {
                  Accept:'application/form-data',
                  'Content-Type':'application/json',
                },
                body:JSON.stringify(listt),
              })
              .then((response)=>response.json())
              .then((data)=>{
                console.log(data.success)
                    if(data.success)
                        {
                            alert("success");
                        }
                        else
                        {
                            alert("something went wrong")
                        }
                })
          }

        
          const deletedata = (id) =>
            {
                fetch('http://localhost:4000/user/deleteitem/'+id,{
                    method:'DELETE',
                    headers:
                    {
                      Accept:'application/form-data',
                      'Content-Type':'application/json',
                    },
                    body:"",
                })
                .then((response)=>response.json())
                .then((data)=>{
                    if(data.success)
                        {
                            console.log('successfully deleted')
                        }
                    else
                    {
                        console.log('something went wrong ')
                    }    
                })
            }  
          const contextvalue = {adddata,deletedata};



          return(
            <Todocontext.Provider value={contextvalue}>
                {props.children}
            </Todocontext.Provider>
          )
    }
    export default Todocontextprovider;