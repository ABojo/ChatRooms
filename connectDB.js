const mongoose = require('mongoose');

const connectToDatabase = () => {
  const { DB_CONNECTION_STRING } = process.env;

  mongoose
    .connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connected to db!');
    });
};

module.exports = connectToDatabase;
