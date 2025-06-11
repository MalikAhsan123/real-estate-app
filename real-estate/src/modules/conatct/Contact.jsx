import React from 'react'
import contactImg from './assets/bgimg1.jpg';
import worldImg from './assets/worldwide.png'
import locationImg from './assets/location.png'
import phoneImg from './assets/telephone.png'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-header text-white flex flex-col justify-center h-52 items-center bg-cover" style={{ backgroundImage: `url(${contactImg})` }}>
        <h1 className='text-3xl font-bold'>Contact Us</h1>
        <p className="">Home - Contact Us</p>
      </div>
      <div className="contact-form flex px-40 py-16 max-xl:px-20 max-md:flex-col max-md:px-8">
        <div className="contact-element mr-10 max-md:mr-0">
          <div className="contact-text">
            <h1 className="text-2xl font-semibold text-[rgb(37,165,222)]">Get in <div className='text-3xl font-semibold'>Touch</div></h1>
            <p className="py-5 max-md:w-[70%]">Ortiz is the best theme for elit, sed do eiusmod tempor dolor sit ame tse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4">
              <img src={locationImg} alt="Image Not Found" className="w-5" />
            </div>
            <div className="">
              <p className="">256, 1st AVE, Manchester</p>
              <p className="">125 , Noth England</p>
            </div>
          </div>
          <hr className='w-60 text-gray-300 my-6' />
          <div className="flex items-center my-4">
            <div className="mr-4">
              <img src={phoneImg} alt="Image Not Found" className="w-5" />
            </div>
            <div className="">
              <p className="">+88 (012) 356 958 45</p>
              <p className="">+88 (012) 356 958 45</p>
            </div>
          </div>
          <hr className='w-60 text-gray-300 my-6' />
          <div className="flex items-center">
            <div className="mr-4">
              <img src={worldImg} alt="Image Not Found" className="w-5" />
            </div>
            <div className="">
              <p className="">Email : info@example.com</p>
              <p className="">Web : www.example.com</p>
            </div>
          </div>
        </div>
        <div className="contact-element flex flex-col text-black max-lg:w-[40%] max-md:w-[100%] max-md:mt-10">
          <h1 className="text-xl font-bold">Leave A Message</h1>
          <div className="my-6">
            <input type="text" name="" id="user-name" placeholder='Name' className='border-1 border-gray-300 outline-none py-3 px-4 rounded-3xl mr-5 mb-4 max-md:w-full' />
            <input type="email" name="" id="user-email" placeholder='Email' className='border-1 border-gray-300 outline-none py-3 px-4 rounded-3xl max-md:w-full' />
          </div>
          <textarea name="" id="" cols="56" rows="10" className='border-1 border-gray-300 outline-none rounded-xl px-4' placeholder='Message'></textarea>
          <div className="my-12">
            <button className="bg-[rgb(37,165,222)] rounded-full cursor-pointer hover:bg-black duration-500 py-3 px-12 text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
