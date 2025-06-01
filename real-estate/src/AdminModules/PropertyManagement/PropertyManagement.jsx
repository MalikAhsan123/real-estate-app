import React from "react";
import { motion } from "framer-motion";

const PropertyManagement = () => {
  const properties = [
    { id: 1, title: "Modern Apartment", price: "500,000", status: "For Sale", owner: "John Doe" },
    { id: 2, title: "Luxury Villa", price: "1,500,000", status: "Sold", owner: "Jane Smith" },
    { id: 3, title: "Cozy Cottage", price: "250,000", status: "For Sale", owner: "Bob Johnson" },
  ];

  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold mb-4">Property Management</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-x-auto">
        <thead>
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Owner</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="p-2">{property.title}</td>
              <td className="p-2">${property.price}</td>
              <td className="p-2">{property.status}</td>
              <td className="p-2">{property.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default PropertyManagement;
