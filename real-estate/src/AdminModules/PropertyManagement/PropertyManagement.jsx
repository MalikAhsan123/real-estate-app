import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const PropertyManagement = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);
  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/properties/getproperty");

      // ✅ Make sure data is an array
      if (Array.isArray(res.data)) {
        setProperties(res.data);
      } else if (res.data?.properties && Array.isArray(res.data.properties)) {
        setProperties(res.data.properties); // fallback in case it's nested
      } else {
        console.error("Unexpected response format", res.data);
        setProperties([]); // set empty array to avoid crash
      }
    } catch (err) {
      console.error("Error fetching properties", err);
      setProperties([]); // fallback to empty array on error
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    try {
      await axios.delete(`/api/properties/${id}`);
      setProperties(properties.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-6">Admin - Manage Properties</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="px-4 py-2 text-left">Property Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Property Type</th>
              <th className="px-4 py-2 text-left">Area (sqft)</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className="border-t text-sm">
                <td className="px-4 py-2">{property.propertyname}</td>
                <td className="px-4 py-2">${property.price}</td>
                <td className="px-4 py-2">{property.type}</td>
                <td className="px-4 py-2">{property.area} sqft</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PropertyManagement;
