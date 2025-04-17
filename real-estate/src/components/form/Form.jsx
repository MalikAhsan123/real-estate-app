import React, { useEffect, useState } from "react";
import breadCrumb from "./assets/breadcrumb.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formSubmit } from "../../slices/auth/authSlice";
import { toast } from "react-toastify";
import { clearAuthState } from "../../slices/auth/authSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Form = ({ isLogin }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  
  const userState = useSelector((state) => state.user || {});

console.log('success state', userState)
// useEffect(() => {
//   if (success) {
//     navigate("/");
//   }
// }, [success])
  useEffect(() => {
    console.log("success", userState.success);
    if (userState.success) {
      toast.success("Logged in successfully");
      navigate("/");
    } else if (userState.error) {
      console.log('error', userState.error)
      toast.error(userState.msg);
      dispatch(clearAuthState());
    }
  }, [userState.success, userState.error, isLogin]);

  const [credential, setCredential] = useState({  ...(!isLogin && {
    name: "",
     lastName: ""
  }), email: "", password: ""});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
 
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // dispatch(formSubmit({credential, isLogin}));
    setCredential({name: "", lastName: "", email: "", password: "", confirmPassword: ""})
    if(credential.password === credential.confirmPassword ){
    dispatch(formSubmit({credential, isLogin}));
    }else{
      toast.error("Password not confirm");
    }
    console.log(credential)
   
    
  }

  
 


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
              onSubmit={handleSubmit}
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
                      value={credential.name}
                      required
                      minLength={3}
                      onChange={onChange}
                      className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                    />
                  </div>
                  <div>
                    {/* <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value = {credential.lastName}
                      required
                      minLength={3}
                      onChange={onChange}
                      className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                    /> */}
                  </div>
                </>
              )}

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={credential.email}
                  required
                  onChange={onChange}
                  className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={credential.password}
                  required
                  minLength={5}
                  onChange={onChange}
                  className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
                />
                <div
                  className="absolute right-2 top-1/3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                </div>
              </div>
              {!isLogin && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={credential.confirmPassword}
                    required
                    onChange={onChange}
                    className="w-2xs px-2 py-4 outline-0 border-b-[1px] border-b-[#25A5DE]"
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
              
  
