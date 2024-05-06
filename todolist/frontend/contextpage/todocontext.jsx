import React , { Children, createContext } from "react";

export const Todocontext = createContext(null);

const Todocontextprovider = (props) =>
    {
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
              .then((data)=>responsedata=data)
              if(responsedata.success)
                {
                return true;
                }
                else
                {
                return false;
                }
          }
          const display = () =>
            {
                
            }
          const deletedata = () =>
            {

            }  
          const contextvalue = {adddata,display,deletedata};



          return(
            <Todocontext.Provider value={contextvalue}>
                {props.children}
            </Todocontext.Provider>
          )
    }
    export default Todocontextprovider;