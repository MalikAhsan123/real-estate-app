import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Building } from "lucide-react";
import UserManagement from "../UserManagement/UserManagement.jsx";
import PropertyManagement from "../PropertyManagement/PropertyManagement.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../slices/allUsers/getuserSlice";


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const dispatch = useDispatch();
 
  const users = useSelector((state) => state.allUsers.users);
  useEffect(() => {
    dispatch(getUsers()); // initial fetch
  }, [activeSection]);
 

 
  return (
    <div className="flex min-h-screen min-w-fit bg-gray-100 relative">
      <div className="lg:w-64">
 <aside className="hidden lg:flex w-64 h-full bg-[#05344A] text-white flex-col p-6 shadow-lg fixed left-0 top-0 z-10">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
        <nav className="space-y-4">
          <div
            className="flex items-center space-x-3 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("dashboard")}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </div>
          <div
            className="flex items-center space-x-3 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("users")}
          >
            <Users size={20} />
            <span>Users</span>
          </div>
          <div
            className="flex items-center space-x-3 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("properties")}
          >
            <Building size={20} />
            <span>Properties</span>
          </div>
        </nav>
      </aside>
      </div>
      {/* Sidebar */}
     

      {/* Top Navbar for Mobile */}
      <nav className="fixed top-0 left-0 w-full bg-[#05344A] text-white p-4 flex justify-between items-center lg:hidden z-50">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="flex space-x-4">
          <div
            className="flex items-center space-x-1 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("dashboard")}
          >
            <Home size={18} />
            <span className="text-sm">Dashboard</span>
          </div>
          <div
            className="flex items-center space-x-1 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("users")}
          >
            <Users size={18} />
            <span className="text-sm">Users</span>
          </div>
          <div
            className="flex items-center space-x-1 hover:text-[#25A5DE] cursor-pointer"
            onClick={() => setActiveSection("properties")}
          >
            <Building size={18} />
            <span className="text-sm">Properties</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.main
        className="flex-1 mt-16 lg:mt-0 p-2 lg:p-4 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {activeSection === "dashboard" && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 my-8">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#05344A] text-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold">Total Users</h3>
                <p className="text-3xl font-bold mt-2">{users.length}</p>
              </div>
              <div className="bg-[#25A5DE] text-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold">Total Properties</h3>
                <p className="text-3xl font-bold mt-2">320</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">$15,800</p>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">New Users Today</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">35</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Properties Sold Today</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
              </div>
            </div>
          </>
        )}

        {activeSection === "users" && <UserManagement />}
        {activeSection === "properties" && <PropertyManagement />}
      </motion.main>
    </div>
  );
};

export default Dashboard;
