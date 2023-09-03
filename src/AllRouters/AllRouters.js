import React from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../Components/AuthContext';

import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';
import ToDo from '../pages/ToDo';
import Post from '../pages/Post';
import Gallery from '../pages/Gallery';
import { UserProvider } from '../Components/Userprovider';
export default function AllRouters() {
  return (
    <AuthProvider>
    <UserProvider>
    <Router basename="/reactapp">
 
      <Routes>
      <Route  exact path='/reactapp' element={<LandingPage/>} />
          <Route exact path='/profile/:userId' element={<ProfilePage/>} />
        
        
          <Route  exact path='/post' element={<Post/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
        </Routes>

  </Router> 

  

  </UserProvider>
  </AuthProvider>
  )
}
