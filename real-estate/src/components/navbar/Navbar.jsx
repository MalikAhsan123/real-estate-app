import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, clearAuthState } from "../../slices/auth/authSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import HamburgerNavbar from "../hamburgerNavbar/HamburgerNavbar.jsx";
import { FaCircleUser } from "react-icons/fa6";
import { delay, motion, AnimatePresence } from "framer-motion";
import { div } from "motion/react-client";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let userDetail = useSelector((state) => state.user.user);
  console.log("userDetail", userDetail);
  const [isCross, setIsCross] = useState(false);

  

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };
  const toggleHamburgerNavbar = () => {
    setIsCross(!isCross);
  };

  const handleProperties = () => {
    // if(!isLoggedIn){
    //   navigate('/login');
    // }else{
    //   navigate('/properties')
    // }
     navigate('/properties')
  }

  useEffect(() => {
    dispatch(clearAuthState());
  }, []);

  return (
    <>
      <div className="bg-[#05344A] text-white flex flex-col items-center py-4 space-y-5 md:space-y-0  md:flex-row md:justify-between md:items-center md:px-20 md:py-4 lg:px-40 ">
        <div className="text-sm font-bold">Call us - 0302-7475533</div>
        <div className="sm:space-x-10 space-x-3 flex justify-center items-center">
          <button onClick={handleProperties}  className="bg-[#1290cb] px-4 py-2 md:px-6 md:py-2 rounded-3xl cursor-pointer hover:bg-black border-2 border-[#0776aa]" >
            Add Property
          </button>
          {!isLoggedIn && (
            <>
              <Link
                to="/register"
                className="hover:text-[#0776aa] cursor-pointer "
              >
                Register
              </Link>
              <Link to="/login" className="hover:text-[#0776aa] cursor-pointer">
                Login
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <button
                onClick={handleLogout}
                className={`bg-[#1290cb] px-4 py-2 md:px-6 md:py-2 rounded-3xl cursor-pointer hover:bg-black border-2 border-[#0776aa] `}
              >
                Logout
              </button>

              <div className="flex justify-center items-center space-x-2 border-1 border-[#a7a5a5] py-2 px-2 cursor-pointer">
                <FaCircleUser className="text-[20px]" />
                <p className="text-sm">{userDetail?.name}</p>
                {/* <p className="text-sm ">{userDetail?.lastName}</p> 
                  <p className="text-sm">{userDetail?.email}</p> */}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="py-4 w-screen flex justify-center  bg-white md:px-20 lg:px-40 md:py-8">
        <div className="w-[80%] md:w-screen flex items-center justify-between">
          <div>
            <img
              className="w-[127px] h-[75px] px-0 py-0"
              src={logo}
              alt="Image not found"
            />
          </div>
          <div>
            <ul className="space-x-12 font-bold hidden md:flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/properties">Properties</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden text-4xl" onClick={toggleHamburgerNavbar}>
            {isCross && (
              <>
                <ImCross />
              </>
            )}
            {!isCross && (
              <div>
                <GiHamburgerMenu />
              </div>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isCross && (
          <div className="flex justify-center pb-4">
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 180, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden border-1 border-[#d8d8d8] w-[80%] text-lg "
            >
              <li className="border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer">
                Home
              </li>
              <li className="border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer">
                About
              </li>
              <li className="border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer">
                Properties
              </li>
              <li className="border-b-1 border-b-[#d8d8d8] pl-6 py-2 cursor-pointer">
                Contact
              </li>
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
