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
            <div className="footer-section flex justify-around bg-cover text-white py-8" style={{ backgroundImage: `url(${bgfooter})` }}>
                <div className="footer-element w-[20%]">
                    <h2 className="footer-text text-2xl font-bold ">About</h2>
                    <p className="footer-para py-5">Ortiz is the best and popular real estate to you how all this mistaolt cing pleasure and praising ained wasnad pain was prexplain</p>
                    <div className="news-letter border-2 flex items-center justify-evenly py-3 rounded-sm">
                        <input type="email" className="news-input outline-none" placeholder='Email for News letter' />
                        <img src={paperPlane} alt="Image Not Found" className='w-4 invert' />
                    </div>
                </div>
                <div className="footer-element">
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
                <div className="footer-element">
                    <h1 className="text-2xl font-bold">Quick Link</h1>
                    <div className="flex flex-col mt-4">
                        <Link to="/" className='mb-3 hover:text-amber-100'>Home</Link>
                        <Link to="/about" className='mb-3 hover:text-amber-100'>About</Link>
                        <Link to="/property" className='mb-3 hover:text-amber-100'>Property</Link>
                        <Link to="/contact" className='mb-3 hover:text-amber-100'>Contact</Link>
                    </div>
                </div>
                <div className="footer-element">
                    <div className="">
                        <h1 className="text-2xl font-bold">Contact Us</h1>
                        <div className="flex items-center mt-4">
                            <div className="mr-4">
                                <img src={locationImg} alt="Image Not Found" className="w-5 invert" />
                            </div>
                            <div className="">
                                <p className="">533, AK Town, Samundri</p>
                                <p className="">533 , Punjab, Pakistan</p>
                            </div>
                        </div>
                        <div className="flex items-center my-4">
                            <div className="mr-4">
                                <img src={phoneImg} alt="Image Not Found" className="w-5 invert" />
                            </div>
                            <div className="">
                                <p className="">+92 3027071104</p>
                                <p className="">+92 3260327533</p>
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
    )
}

export default Footer
