
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import bgImage from './assets/breadcrumb.jpg';
import Image from './assets/01.jpg';


const Properties = () => {
  const navigate = useNavigate();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/properties')
    }
  }, [])

  return (
    <div>
      <div className="about-container w-[100%] text-white" >
        <div className="box h-52 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <h1 className='text-3xl font-bold'>Properties</h1>
          <p className="">Home - Property</p>
        </div>
      </div>
      <div className="property-section px-10 py-16">
        <div className="propertyForSale">
          <div class="text-center rounded-lg max-w-[20%] shadow-lg overflow-hidden">
            <img src={Image} alt="Property For Sale" className='h-56 rounded w-full object-fill hover:scale-110 overflow-hidden duration-300' />
            <div className="">
              <h2 class="tracking-widest text-indigo-500 text-xs font-semibold title-font my-4">Mariyasa de Casel</h2>
              <span class=" text-sm text-gray-700 font-medium ">22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</span>
              <p class="leading-relaxed text-base font-bold mt-3 pb-2">Price $ 1,59,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
