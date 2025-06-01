import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector} from "react-redux";
import { getUsers } from "../../slices/allUsers/getuserSlice";
import { deleteUser } from "../../slices/deleteUser/deleteUser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const UserManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
 let users = useSelector((state) => state.allUsers.users)
 const msg = useSelector((state) => state.deleteUser.msg)
 console.log('msg', msg)
 console.log('ahsan', users[0])
 const dispatch = useDispatch();


   const handleDelete = (id) => {
    setShowModal(true);
    setUserId(id);
   }
   const userDelete = async () => {
    setShowModal(false);
    await dispatch(deleteUser(userId));
     toast.success(msg);
    dispatch(getUsers());
   }
    useEffect(() => {
     dispatch(getUsers()); // initial fetch
   }, []);

  return (
    <motion.div
      className=" py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer />
      <h1 className="text-xl font-bold mb-4">User Management</h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">LastName</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.lastName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <h3 className="mb-4 text-lg font-semibold">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={userDelete}
                className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default UserManagement;
