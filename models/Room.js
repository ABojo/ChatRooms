const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  private: Boolean,
  password: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

roomSchema.virtual('url').get(function () {
  return `/room/${this.name}`;
});

roomSchema.virtual('messageCount').get(function () {
  return this.messages.length;
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
