import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formSubmit } from "../../slices/auth/authSlice";
import { toast } from "react-toastify";
import { clearAuthState } from "../../slices/auth/authSlice";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user || {});

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const adminLogin = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resultAction = await dispatch(
        formSubmit({
          credential: { email, password },
          isAdmin: true,
          isLogin: false,
        })
      );
      console.log("ahsan", resultAction.payload.msg);
      if (resultAction.payload.success && resultAction.payload.admin) {
        navigate("/dashboard");
        toast.success("Logged in successfully");
        // dispatch(clearAuthState());
        console.log("Admin login success", resultAction.payload.success);
      } else if (resultAction.payload.isError) {
        console.error(
          "Admin login failed",
          resultAction.payload.errorMsg || "Not authorized as admin"
        );
        toast.error(resultAction.payload.errorMsg);
      }
    } catch (error) {
      console.error("Something went wrong", error);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
    }
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-white to-amber-100 relative overflow-hidden p-4">
      {/* Top Left Bubble */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-2xl z-0"
        style={{ top: "-50px", left: "-50px" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.3, 0.2],
          y: [0, -20, 0], // floating up and down
        }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Bottom Right Bubble */}
      <motion.div
        className="absolute w-60 h-60 bg-amber-200 rounded-full opacity-20 blur-2xl z-0"
        style={{ bottom: "-40px", right: "-40px" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.3, 0.2],
          y: [0, -20, 0], // floating up and down
        }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Form Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-blue-900 mb-10"
        >
          Admin Login
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email/Username */}
          <motion.div variants={itemVariants} custom={0}>
            <div className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 peer"
                placeholder=" "
              />
              <label className="absolute top-2 left-4 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                Email Address
              </label>
            </div>
          </motion.div>

          {/* Password */}
          <motion.div variants={itemVariants} custom={1}>
            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 peer"
                placeholder=" "
              />
              <label className="absolute top-2 left-4 text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                Password
              </label>
              <div
                className="absolute right-4 top-5 cursor-pointer text-gray-500 hover:text-blue-700"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} custom={2}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all hover:bg-blue-800"
            >
              {isSubmitting ? (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="w-6 h-6 border-4 border-white border-t-transparent rounded-full mx-auto"
                />
              ) : (
                "Login"
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
