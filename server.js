require('dotenv').config();
const startServer = require('./app');
const connectToDatabase = require('./connectDB');

//Connect to db + start listening for requests
connectToDatabase();
startServer();
