import {React} from 'react';
import {Router ,Routes, Route} from 'react-router-dom';
import Signin from "./auth/forms/signin";
import Signup from "./auth/forms/signup"; 
function App() {

  return (
    <main>
      <Routes>
       <Route>
      {/* Public Route */}
          <Route path='/' element = {< Signin />}/>
          <Route path='/signup' element = {< Signup />}/>
        </Route>

      </Routes>
    </main>
  )
}

export default App
