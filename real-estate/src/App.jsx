import React from 'react'
// import { StrictMode } from 'react'
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx'
import AddProperty from './components/addproperty/addproperty.jsx'

// import './App.css'
function App() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Outlet />
        <Footer />
        <AddProperty />
      </div>

    </>
  )
}

export default App
