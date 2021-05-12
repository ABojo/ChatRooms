const startServer = require('./app');
const connectToDatabase = require('./connectDB');

require('dotenv').config();
connectToDatabase();
startServer();
