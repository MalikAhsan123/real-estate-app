import React, { useCallback, useEffect, useState } from "react";
import breadCrumb from "./assets/breadcrumb.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formSubmit, clearAuthState } from "../../slices/auth/authSlice";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Form = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user || {});

  const [credential, setCredential] = useState({
    ...(!isLogin && {
      name: "",
      lastName: "",
      confirmPassword: ""
    }),
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (userState.success) {
      if (isLogin && userState.isLoggedIn) {
        toast.success("Logged in successfully");
        navigate("/");
      } else if (!isLogin) {
        toast.success("Registered successfully. Please log in.");
        dispatch(clearAuthState());
      }
    } else if (userState.error) {
      toast.error(userState.msg);
      dispatch(clearAuthState());
    }
  }, [userState.success, userState.error, isLogin, dispatch, navigate]);

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && credential.password !== credential.confirmPassword) {
      toast.error("Password not confirm");
      return;
    }

    dispatch(formSubmit({ credential, isLogin, isAdmin: false }));

    setCredential({
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className="w-screen h-52 flex justify-center items-center"
        style={{ backgroundImage: `url(${breadCrumb})` }}
      >
        <div className="text-white text-3xl font-bold">
          {isLogin ? "Login" : "Register"}
        </div>
      </div>

      <div className="w-full py-30 lg:py-40 flex justify-center items-center flex-col lg:flex-row">
        <div className="bg-[#25A5DE] w-[70%] lg:w-[30%] h-96 flex justify-center flex-col space-y-5">
          <div className="text-white text-lg font-bold text-center lg:text-start lg:pl-16">
            {isLogin
              ? "Already Do not have account"
              : "Already have an account?"}
          </div>
          <div className={`text-center lg:text-start ${isLogin ? "lg:pl-20" : "lg:pl-28"}`}>
            <Link to={isLogin ? "/register" : "/login"}>
              <button className="bg-white text-[#25A5DE] py-2 px-8 font-bold rounded-full cursor-pointer hover:bg-black hover:text-white">
                {isLogin ? "Create an account" : "Login"}
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#F1F1F1] px-10 py-20 w-[70%] lg:w-auto">
          <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
            <div className="text-2xl font-bold text-[#25A5DE] mb-10">
              {isLogin ? "Login" : "Register"}
            </div>

            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={credential.name || ""}
                  required
                  minLength={3}
                  onChange={onChange}
                  className="w-full lg:w-2xs px-2 py-4 outline-0 border-b border-b-[#25A5DE]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={credential.lastName || ""}
                  required
                  minLength={3}
                  onChange={onChange}
                  className="w-full lg:w-2xs px-2 py-4 outline-0 border-b border-b-[#25A5DE]"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credential.email}
              required
              onChange={onChange}
              className="w-full lg:w-2xs px-2 py-4 outline-0 border-b border-b-[#25A5DE]"
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={credential.password}
                required
                minLength={5}
                onChange={onChange}
                className="w-full lg:w-2xs px-2 py-4 outline-0 border-b border-b-[#25A5DE]"
              />
              <div className="absolute right-2 top-1/3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </div>
            </div>

            {!isLogin && (
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={credential.confirmPassword || ""}
                  required
                  onChange={onChange}
                  className="w-full lg:w-2xs px-2 py-4 outline-0 border-b border-b-[#25A5DE]"
                />
                <div
                  className="absolute right-2 top-1/3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-[#25A5DE] text-white py-2 px-8 rounded-full mt-10 cursor-pointer hover:bg-black duration-500"
            >
              {isLogin ? "Login" : "Create an account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;