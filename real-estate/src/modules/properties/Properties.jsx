
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import React from 'react';
import bgImage from './assets/breadcrumb.jpg';
import Image from './assets/01.jpg';


const Properties = () => {
  const navigate = useNavigate();
let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
 if(!isLoggedIn){
      navigate('/login');
    }else{
      navigate('/properties')
    }
  }, [])

  return (
    <div>
      <div className="about-container w-[100%] text-white" >
        <div className="box h-52 flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <h1 className='text-3xl font-bold'>Properties</h1>
        </div>
      </div>
      <div className="property-section px-10 py-16">
        <div className="propertyForSale">
          <div class=" rounded-lg max-w-[20%]">
            <img src={Image} alt="Property For Sale" className='h-40 rounded w-full object-cover object-center mb-6' />
            <h2 class="tracking-widest text-indigo-500 text-xs font-normal title-font">Mariyasa de Casel</h2>
            <h4 class="text-lg text-gray-900 font-medium title-font mb-4">22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</h4>
            <p class="leading-relaxed text-base">Price $ 1,59,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
