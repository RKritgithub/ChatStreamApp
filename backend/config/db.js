//This file is responsible for connecting to our database
const mongoose = require("mongoose");

const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
      
    console.log(`MongoDB is connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
        
    }
};

module.exports = connectDB;



