const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'You must provide a name!'] },
  username: {
    type: String,
    unique: [true, 'Sorry, that username is already taken!'],
    required: [true, 'You must specify a username!'],
  },
  password: { type: String, required: [true, 'You must specify a password!'] },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
