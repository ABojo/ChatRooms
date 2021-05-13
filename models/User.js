const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    unique: [true, 'Sorry, that username is already taken!'],
  },
  password: String,
  membership: {
    type: String,
    enum: ['free', 'premium', 'admin'],
    default: 'free',
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
