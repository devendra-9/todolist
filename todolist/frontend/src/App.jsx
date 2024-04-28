import {React} from 'react';
import {Router ,Routes, Route} from 'react-router-dom';
import Authz from "./auth/authorisation";
import Signin from "./auth/forms/signin";
import Signup from "./auth/forms/signup"; 
import Rootlayout from './rootlayout/root'
import Home from './pages/home' 
function App() {

  return (
    <main>
      <Routes>


        <Route element = {<Authz/>}>
      {/* Public Route */}
          <Route path='/signin' element = {< Signin />}/>
          <Route path='/signup' element = {< Signup />}/>
        </Route>


        <Route element={<Rootlayout />}>
        {/* Private Route */}
          <Route index element={< Home />} />
        </Route>


      </Routes>
    </main>
  )
}

export default App
