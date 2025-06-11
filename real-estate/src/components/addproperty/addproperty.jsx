import React from 'react'
import bgImage from './assets/breadcrumb.jpg';

const addproperty = () => {
    return (
        <div className='addpropertySection'>
            <div className="about-container w-[100%] text-white" >
                <div className="box h-52 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <h1 className='text-3xl font-bold'>Add Property</h1>
                    <p className="">Home - Add Property</p>
                </div>
            </div>
            <div className="infromationSection py-14 px-28">
                <div className="container mx-auto px-4 py-8">
                    <h2 className='text-2xl font-bold mb-4'>Add Your Property</h2>
                    <form className='space-y-4'>
                        <div className='flex justify-between'>
                            <div className="w-9/12">
                                <label className='block text-sm font-medium mb-1'>Property Name</label>
                                <input type="text" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter property name' />
                            </div>
                            <div className="w-1/5">
                                <label className='block text-sm font-medium mb-1'>Price</label>
                                <input type="number" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter Price' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className="w-[45%]">
                                <label className='block text-sm font-medium mb-1'>Location</label>
                                <input type="text" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter Location' />
                            </div>
                            <div className="w-[45%]">
                                <label className='block text-sm font-medium mb-1'>Property Type</label>
                                <input type="text" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter Property Type (Rent or Sale)' />
                            </div>
                        </div>
                        <div className="">
                            <label className='block text-sm font-medium mb-1'>Image</label>
                            {/* <input type="file" id="product-image" name="image" accept="image/*" placeholder="Select Image"></input> */}
                            <input type="file" id='property-image' accept='image/*' className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Select Property Image' />
                        </div>
                        <div className="flex justify-between">
                            <div className="w-1/5">
                                <label className='block text-sm font-medium mb-1'>No of BedRooms</label>
                                <input type="number" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter No of BedRooms' />
                            </div>
                            <div className="w-1/5">
                                <label className='block text-sm font-medium mb-1'>No of BathRooms</label>
                                <input type="number" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter No of BathRooms' />
                            </div>
                            <div className="w-1/5">
                                <label className='block text-sm font-medium mb-1'>No of Garage</label>
                                <input type="number" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Enter No of Garage' />
                            </div>
                            <div className="w-1/5">
                                <label className='block text-sm font-medium mb-1'>Area</label>
                                <input type="number" className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' placeholder='Area (sqft)' />
                            </div>
                        </div>
                        <div className=''>
                            <label className='block text-sm font-medium mb-1'>Description</label>
                            <textarea className='w-full p-2 border border-gray-300 rounded-xl outline-hidden' rows="4" placeholder='Enter property description'></textarea>
                        </div>
                        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addproperty