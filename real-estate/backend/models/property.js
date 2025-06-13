import mongoose from "mongoose";

const { Schema } = mongoose;
const PropertySchema = new Schema({
    propertyname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Rent','rent', 'Sale','sale'], // restrict to Rent or Sale
        required: true
    },
    image: {
        type: String, // Store URL or filename (if uploading to cloud/server)
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    garage: {
        type: Number,
        required: true
    },
    area: {
        type: Number, // in square feet
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
const Property = mongoose.model('property', PropertySchema);
export default Property;