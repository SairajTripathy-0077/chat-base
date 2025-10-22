const express = require('express')
const cookierParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const connectDb = require('./config/dbConnect');

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//database connection
connectDb();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});