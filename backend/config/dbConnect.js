const mongoose = require('mongoose');//db connection file

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,// to avoid deprecation warnings
            useUnifiedTopology: true,// to avoid deprecation warnings
        })// connect to mongoDB
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);// exit process with failure
    }
}// connectDb function 

module.exports = connectDb;