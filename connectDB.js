const mongoose = require('mongoose');

const connectToDatabase = () => {
  const { DB_CONNECTION_STRING, DB_NAME, DB_USER, DB_PASS } = process.env;
  const connectionString = DB_CONNECTION_STRING.replace('<username>', DB_USER)
    .replace('<password>', DB_PASS)
    .replace('<db_name>', DB_NAME);

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connected to db!');
    });
};

module.exports = connectToDatabase;
