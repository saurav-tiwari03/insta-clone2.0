import './App.css'
import Authpage from './pages/Authpage/Authpage'
import Signup from './pages/Authpage/Signup'
import Home from './pages/Home'
import {Routes,Route,Navigate } from 'react-router-dom'
import {auth} from './config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Profilepage from './pages/ProfilePage/Profilepage'


function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
    
    <div >
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />}/>
        <Route path='/login' element={<Authpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/:username' element={<Profilepage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
