import { useState } from 'react'

import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import about from './modules/about/About.jsx'
// import './App.css'


function App() {


  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
