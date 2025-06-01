import React from 'react'
import aboutImage from './assets/bgimg1.jpg';
import aboutImage2 from './assets/bgimg2.png';
import costImg from './assets/cost.png';
import marktingImg from './assets/markting.png';
import searchImg from './assets/search.png';
import secureImg from './assets/secure.png';
import buyImg from './assets/buy.png';
import saleImg from './assets/sale.png';
import serviceImg from './assets/service.png';
import replaceImg from './assets/replace.png';
import clint1Img from './assets/01.png';
import clint2Img from './assets/02.png';
import clint3Img from './assets/03.png';
import clint4Img from './assets/04.png';
import clint5Img from './assets/05.png';


const About = () => {
    
    return (
        <div className=''>
            <div className="about-container w-[100%]" >
                <div className="box h-52 flex justify-center items-center text-white" style={{ backgroundImage: `url(${aboutImage})` }}>
                    <h1 className='text-3xl font-bold'>About</h1>
                </div>
            </div>
            <div className="about-section flex px-10 py-14 max-md:flex-col max-md:justify-center max-md:items-center">
                <div className='flex justify-center w-[45%] max-sm:w-full'>
                    <img src={aboutImage2} alt="Image Not Found" className="" />
                </div>
                <div className='ml-20 w-[55%] max-md:w-[90%] max-sm:ml-0'>
                    <h3 className='text-3xl heading-h3 w-[70%] font-bold pb-6 max-sm:text-xl max-sm:w-[100%]'>
                        We always try to provide best
                        services for our customers...</h3>
                    <p className="w-[90%] py-4 max-sm:w-[100%]">Ortiz is one of the most popular real estate company all around World. You can find your dream property or build property with us. We always provide importance to our customer.
                    </p>
                    <div className="">
                        <div className='flex mt-6 max-sm:flex-col'>
                            <div className="flex mt-8 w-[50%] max-sm:w-[100%]">
                                <div className="img-box">
                                    <img src={costImg} alt="Image Not Found" className='w-10 mr-3' />
                                </div>
                                <div className="pl-2 mr-8">
                                    <h2 className='font-bold pb-2'>Minimum Cost</h2>
                                    <p className="">Privide low cost that help all more build real estate</p>
                                </div>
                            </div>
                            <div className="flex mt-8 w-[50%]  max-sm:w-[100%]">
                                <div className="img-box">
                                    <img src={marktingImg} alt="Image Not Found" className='w-10 mr-3' />
                                </div>
                                <div className="pl-2">
                                    <h2 className='font-bold pb-2'>Best Marketing</h2>
                                    <p className="">Privide low cost that help all more build real estate</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-6 max-sm:flex-col'>
                            <div className="flex mt-8 w-[50%]  max-sm:w-[100%]">
                                <div className="img-box ">
                                    <img src={searchImg} alt="Image Not Found" className='w-10 mr-3' />
                                </div>
                                <div className="pl-2 mr-5">
                                    <h2 className='font-bold pb-2'>Easy to search</h2>
                                    <p className="">You can find your property to simply and easy way</p>
                                </div>
                            </div>
                            <div className="flex mt-8 w-[50%] max-sm:w-[100%]">
                                <div className="img-box">
                                    <img src={secureImg} alt="Image Not Found" className='w-8 mr-3' />
                                </div>
                                <div className="pl-2">
                                    <h2 className='font-bold pb-2'>Secure</h2>
                                    <p className="">You can find your property to simply and easy way</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-secion px-20 py-10 max-md:px-5">
                <div className="service-heading flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-5 text-center">Services that we provide</h1>
                    <p className="w-2/4 text-center max-sm:w-[100%] max-sm:px-2">Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer</p>
                </div>
                <div className="service-text">
                    <div className=''>
                        <div className="flex justify-evenly align-center my-10 max-sm:flex-col max-sm:items-center ">
                            <div className="services-element flex items-center flex-col text-center w-[20%] max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:items-center ">
                                <img src={buyImg} alt="Image Not Found" className="" />
                                <h2 className="text-2xl font-bold py-2">Buy Property</h2>
                                <p className="max-sm:text-center">We buy various of properties as like various people who want to sale their properites with trust</p>
                            </div>
                            <div className="services-element flex items-center flex-col text-center w-[20%] max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:items-center">
                                <img src={saleImg} alt="Image Not Found" className="" />
                                <h2 className="text-2xl font-bold py-2">Sale Property</h2>
                                <p className="max-sm:text-center">We buy various of properties as like various people who want to sale their properites with trust</p>
                            </div>
                        </div>
                        <div className="flex justify-evenly align-center my-10  max-sm:flex-col max-sm:items-center">
                            <div className="services-element flex items-center flex-col text-center w-[20%] max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:items-center">
                                <img src={serviceImg} alt="Image Not Found" className="" />
                                <h2 className="text-2xl font-bold py-2">Best Marketing</h2>
                                <p className="max-sm:text-center">We buy various of properties as like various people who want to sale their properites with trust</p>
                            </div>
                            <div className="services-element flex items-center flex-col text-center w-[20%] max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:items-center">
                                <img src={replaceImg} alt="Image Not Found" className="" />
                                <h2 className="text-2xl font-bold py-2">Minimum Cost</h2>
                                <p className="max-sm:text-center">We buy various of properties as like various people who want to sale their properites with trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="client-section flex justify-evenly py-10 px-10">
                <div className="">
                    <img src={clint1Img} alt="Image Not Found" className="" />
                </div>
                <div className="">
                    <img src={clint2Img} alt="Image Not Found" className="" />
                </div>
                <div className="">
                    <img src={clint3Img} alt="Image Not Found" className="" />
                </div>
                <div className="">
                    <img src={clint4Img} alt="Image Not Found" className="" />
                </div>
                <div className="">
                    <img src={clint5Img} alt="Image Not Found" className="" />
                </div>
            </div> */}
        </div>
    )
}
export default About