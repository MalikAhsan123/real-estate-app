const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/real-estate";

const connectToMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connect to mongo succesfully");
    } catch (error) {
        console.log("Failed to connect");
    }
}

module.exports = connectToMongo;