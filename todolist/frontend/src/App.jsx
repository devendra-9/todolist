import {React} from 'react';
import {Router ,Routes, Route} from 'react-router-dom';
import Root from './rootlayout/root'
import Signin from "./auth/forms/signin";
import Signup from "./auth/forms/signup"; 
import Home from './pages/home'
function App() {

  return (
    <main>
      <Routes>
       <Route>
      {/* Public Route */}
          <Route path='/' element = {< Signin />}/>
          <Route path='/signup' element = {< Signup />}/>
          {/* <Route path='/user' element={< Root />} > */}
          <Route path='/home' element = {< Home />}/>
          {/* </Route> */}
        </Route>
      </Routes>
    </main>
  )
}

export default App
