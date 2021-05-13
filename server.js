const startServer = require('./app');
const connectToDatabase = require('./connectDB');

//Import env variables, connect to db, and start listening for requests
require('dotenv').config();
connectToDatabase();
startServer();
