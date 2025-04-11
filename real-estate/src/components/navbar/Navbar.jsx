import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/real-state-logo.png";
import { useSelector, useDispatch } from "react-redux";
import {logout} from '../../slices/auth/authSlice'

const Navbar = () => {
  const dispatch = useDispatch();
  let isLoggedIn= useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="bg-[#05344A] text-white flex flex-col items-center py-4 space-y-5 md:space-y-0  md:flex-row md:justify-between md:items-center md:px-20 md:py-4 lg:px-40 ">
        <div className="text-sm font-bold">Call us - 0302-7071104</div>
        <div className="md:space-x-10 space-x-5">
          <button className="bg-[#1290cb] px-6 py-2 rounded-3xl cursor-pointer hover:bg-black border-2 border-[#0776aa]">
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
            className={`bg-[#1290cb] px-6 py-2 rounded-3xl cursor-pointer hover:bg-black border-2 border-[#0776aa] `}
          >
            Logout
          </button>
            </>
          )}
         
        </div>
      </div>
      <div className="flex justify-between items-center bg-white px-40">
        <div>
          <img
            className="w-[140px] h-[105px]"
            src={logo}
            alt="Image not found"
          />
        </div>
        <div>
          <ul className="flex space-x-12 font-bold">
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
      </div>
    </>
  );
};

export default Navbar;
