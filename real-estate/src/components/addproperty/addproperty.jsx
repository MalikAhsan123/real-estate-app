import React, { useState } from 'react';
import bgImage from './assets/breadcrumb.jpg';
import Property from '../../../backend/models/property';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        Propertyname: '',
        price: '',
        location: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        garage: '',
        area: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:3000/api/properties/addproperty', {
                method: 'POST',
                body: form,
            });

            const data = await response.json();
            if (response.ok) {
                alert('Property added successfully!');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (err) {
            console.error(err);
            alert('Failed to submit form');
        }
    };

    return (
        <div className="addpropertySection">
            {/* Header Section */}
            <div className="about-container w-full text-white">
                <div
                    className="h-52 flex flex-col justify-center items-center"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <h1 className="text-3xl font-bold">Add Property</h1>
                    <p>Home - Add Property</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="informationSection py-14 px-4 md:px-28">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Add Your Property</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Property Name + Price */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-9/12">
                                <label className="block text-sm font-medium mb-1">Property Name</label>
                                <input
                                    type="text"
                                    name="propertyname"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="Enter property name"
                                />
                            </div>
                            <div className="md:w-3/12">
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="Enter Price"
                                />
                            </div>
                        </div>

                        {/* Location + Type */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                                <label className="block text-sm font-medium mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="Enter Location"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block text-sm font-medium mb-1">Property Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="Rent or Sale"
                                />
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full p-2 border border-gray-300 rounded-xl"
                            />
                        </div>

                        {/* Bedrooms, Bathrooms, Garage, Area */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/4">
                                <label className="block text-sm font-medium mb-1">Bedrooms</label>
                                <input
                                    type="number"
                                    name="bedrooms"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="No of BedRooms"

                                />
                            </div>
                            <div className="md:w-1/4">
                                <label className="block text-sm font-medium mb-1">Bathrooms</label>
                                <input
                                    type="number"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="No of BathRooms"

                                />
                            </div>
                            <div className="md:w-1/4">
                                <label className="block text-sm font-medium mb-1">Garage</label>
                                <input
                                    type="number"
                                    name="garage"
                                    value={formData.garage}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="No of Garage"
                                />
                            </div>
                            <div className="md:w-1/4">
                                <label className="block text-sm font-medium mb-1">Area (sqft)</label>
                                <input
                                    type="number"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-xl"
                                    placeholder="Area"

                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-xl"
                                rows="4"
                                placeholder="Enter property description"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition duration-300"
                        >
                            Add Property
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddProperty;
