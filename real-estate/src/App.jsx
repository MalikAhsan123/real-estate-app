import React from 'react'
// import { StrictMode } from 'react'
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx'
// import './App.css'


function App() {
  
 
  return (
    <>
      <Navbar  />
      <Outlet />
      <Footer />
      {/* <h1 className='bg-red-500'>AhSAN</h1> */}
      {/* <about /> */}


    </>
  )
}

export default App
