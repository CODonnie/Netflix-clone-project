// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavLinks from './pages/NavLinks/NavLinks'
import logo from '../public/netflix_favicon.ico'
import banner from '../public/background_banner.jpg'

const App = () => {


  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
    <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tvshows' element={<NavLinks title='TvShows' logo={logo} banner={banner} category="tv"/>}/>
        <Route path='/movies' element={<NavLinks title='Movies' logo={logo} banner={banner} category="movie"/>}/>
        <Route path='/popular' element={<NavLinks title='Popular' logo={logo} banner={banner} category="all"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App
