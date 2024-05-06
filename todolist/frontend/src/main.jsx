import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Todocontextprovider from '../contextpage/todocontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Todocontextprovider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Todocontextprovider>  
  // </React.StrictMode> 
)
