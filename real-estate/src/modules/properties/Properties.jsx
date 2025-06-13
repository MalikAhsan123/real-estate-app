import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from './assets/breadcrumb.jpg';

const Properties = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/properties/getproperty');
        setProperties(res.data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full text-white">
        <div
          className="h-52 flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="text-3xl font-bold">Properties</h1>
          <p>Home - Property</p>
        </div>
      </div>

      {/* Properties Section */}
      <div className="px-10 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {properties.map((property) => (
            <div
              key={property._id}
              className="w-full md:w-[25%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={`http://localhost:3000${property.image}`}
                alt={property.propertyname}
                className="h-56 w-full object-fill hover:scale-110 duration-300"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h2 className="text-indigo-600 font-semibold text-lg">{property.propertyname}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {property.location} | {property.area} sqft
                </p>
                <p className="text-sm text-gray-600">
                  {property.bedrooms} Bed · {property.bathrooms} Bath · {property.garage} Garage
                </p>
                <p className="font-bold text-gray-800 text-lg mt-2">${property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
