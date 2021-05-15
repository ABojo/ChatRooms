const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  private: Boolean,
  password: String,
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

roomSchema.virtual('url').get(function () {
  return `/room/${this.name}`;
});

roomSchema.virtual('messageCount').get(function () {
  return this.messages.length;
});

roomSchema.virtual('userCount').get(function () {
  return this.users.length;
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
