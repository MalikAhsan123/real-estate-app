import mongoose from 'mongoose';

const URI = "mongodb://127.0.0.1:27017/real-estate";

const connectToMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

export default connectToMongo;