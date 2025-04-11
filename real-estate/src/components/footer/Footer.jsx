import React from 'react'
import bgfooter from './accets/footer.jpg'
import paperPlane from './accets/paper-plane.png'
import worldImg from './accets/worldwide.png'
import locationImg from './accets/location.png'
import phoneImg from './accets/telephone.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className="footer-section flex max-lg:flex-col bg-cover text-white py-8 px-10" style={{ backgroundImage: `url(${bgfooter})` }}>
                <div className='flex justify-evenly max-sm:flex-col  w-[50%] max-lg:w-[100%]'>
                    <div className="footer-element w-[40%] max-sm:w-[100%]">
                        <h2 className="footer-text text-2xl font-bold ">About</h2>
                        <p className="footer-para py-5">Ortiz is the best and popular real estate to you how all this mistaolt cing pleasure and praising ained wasnad pain was prexplain</p>
                        <div className="news-letter border-2 flex items-center justify-evenly py-3 rounded-sm">
                            <input type="email" className="news-input outline-none w-[148px]" placeholder='Email for News letter' />
                            <img src={paperPlane} alt="Image Not Found" className='w-4 invert' />
                        </div>
                    </div>
                    <div className="footer-element w-[40%] max-sm:w-[100%] max-sm:mt-8">
                        <h1 className="text-2xl font-bold">Popular Posts</h1>
                        <div className="py-3.5">
                            <h2 className='font-bold'>Duplex Villa Design</h2>
                            <p className="">Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
                        </div>
                        <div className="">

                            <h2 className='font-bold'>Duplex Villa Design</h2>
                            <p className="">Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
                        </div>
                    </div>
                </div>


                <div className='flex justify-evenly max-sm:flex-col w-[50%] max-lg:w-[100%] max-lg:mt-10'>
                    <div className="footer-element w-[40%] max-sm:w-[100%] max-sm:mt-8">
                        <h1 className="text-2xl font-bold">Quick Link</h1>
                        <div className="flex flex-col items-start mt-4">
                            <Link to="/" className='mb-3 hover:text-amber-100'>Home</Link>
                            <Link to="/about" className='mb-3 hover:text-amber-100'>About</Link>
                            <Link to="/property" className='mb-3 hover:text-amber-100'>Property</Link>
                            <Link to="/contact" className='mb-3 hover:text-amber-100'>Contact</Link>
                        </div>
                    </div>
                    <div className="footer-element w-[40%] max-sm:w-[100%] max-sm:mt-8">
                        <div className="">
                            <h1 className="text-2xl font-bold">Contact Us</h1>
                            <div className="flex items-center mt-4">
                                <div className="mr-4">
                                    <img src={locationImg} alt="Image Not Found" className="w-5 invert" />
                                </div>
                                <div className="">
                                    <p className="">256, 1st AVE, Manchester</p>
                                    <p className="">125 , Noth England</p>
                                </div>
                            </div>
                            <div className="flex items-center my-4">
                                <div className="mr-4">
                                    <img src={phoneImg} alt="Image Not Found" className="w-5 invert" />
                                </div>
                                <div className="">
                                    <p className="">88 (012) 356 958 45</p>
                                    <p className="">88 (012) 356 958 45</p>
                                </div>
                            </div> <div className="flex items-center">
                                <div className="mr-4">
                                    <img src={worldImg} alt="Image Not Found" className="w-5 invert" />
                                </div>
                                <div className="">
                                    <p className="">Email : info@example.com</p>
                                    <p className="">Web : www.example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
