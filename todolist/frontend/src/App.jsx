import {React} from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from './auth/auth';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Rootlayout from './rootlayout/root'
import Home from './pages/home' 
function App() {

  return (
    <div>
      <Routes>
      {/* Public Route */}
        <Route element={< Auth />}>
          <Route path='/sigin' element = {< Signin />}/>
          <Route path='/sigup' element = {< Signup />}/>

        </Route>
        {/* Private Route */}
        <Route element={< Rootlayout />}>
          <Route path='/' element={< Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
