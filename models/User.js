const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'You must provide a name!'] },
  username: {
    type: String,
    unique: [true, 'Sorry, that username is already taken!'],
    required: [true, 'You must specify a username!'],
  },
  password: { type: String, required: [true, 'You must specify a password!'] },
  membership: {
    type: String,
    enum: ['free', 'premium', 'admin'],
    default: 'free',
    require: [true, 'You must specify a membership!'],
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
