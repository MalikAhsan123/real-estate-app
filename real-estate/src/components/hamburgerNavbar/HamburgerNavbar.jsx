import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion,  } from 'framer-motion';


const HamburgerNavbar = () => {
  return (
    <>
  
        <div
          
         className='flex justify-center pb-4'>
          <motion.ul   className= 'overflow-hidden border-1 border-[#d8d8d8] w-[80%] text-lg'>
          <li className='border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer'><Link to='/about'>About</Link></li>
            <li className='border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer'><Link to="/properties">Properties</Link></li>
            <li className='border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer'><Link to="/contact">Contact</Link></li>
          </motion.ul>
        </div>
       
    </>
  )
}

export default HamburgerNavbar
