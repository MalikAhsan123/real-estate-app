import React from "react";
import breadCrumb from "./assets/breadcrumb.jpg";
import { Link } from "react-router-dom";
const Form = ({ isLogin }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div
          className="w-screen h-52 flex justify-center items-center"
          style={{ backgroundImage: `url(${breadCrumb})` }}
        >
          <div className="text-white text-3xl font-bold">{isLogin ? "Login" : "Register"}</div>
        </div>
        <div className="w-full py-40 flex justify-center items-center relative ">
          <div className={`absolute  ${isLogin ? "top-[138px]" : "top-[77px]"} left-[570px] bg-[#F1F1F1] px-10 py-20`} >
            <form
              action=""
              className="flex justify-center items-center flex-col"
            >
              <div className="text-2xl font-bold text-[#25A5DE] mb-10">
                {isLogin ? "Login" : "Register"}
              </div>
              {!isLogin && (
                <>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      minLength={3}
                      className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      minLength={3}
                      className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                    />
                  </div>
                </>
              )}

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  required
                  minLength={5}
                  className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#25A5DE] text-white py-2 px-8 rounded-full mt-10 cursor-pointer hover:bg-black"
              >
                {isLogin ? "Login" : "Create an account"}
              </button>
            </form>
          </div>
          <div className="bg-[#25A5DE] w-[70%] h-96 flex justify-center flex-col space-y-5">
            <div className="text-white text-lg font-bold  pl-16">
              {isLogin ? "Already Do not have account" : 'Already have an account?'}
            </div>
            <div className={`${isLogin ? "pl-20" : 'pl-28'}`}>
              <Link to={`${isLogin ? "/register" : "/login"}`}>
                <button
                  type="submit"
                  className="bg-white text-[#25A5DE] py-2 px-8 font-bold rounded-full cursor-pointer hover:bg-black hover:text-white"
                >
                  {isLogin ? "Create an account" : "Login"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
