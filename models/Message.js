const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: [true, 'You must specift a timestamp!'],
    default: Date.now,
  },
  text: { type: String, required: [true, 'You must specify text!'] },
  sender: { type: String, required: true },
});

messageSchema.virtual('formattedStamp').get(function () {
  const stamp = this.timestamp;
  const rawHours = stamp.getHours();
  const rawMin = stamp.getMinutes().toString();

  const timeOfDay = rawHours >= 12 ? 'PM' : 'AM';
  const hours = rawHours > 12 ? rawHours - 12 : rawHours;
  const minutes = rawMin.length === 1 ? `0${rawMin}` : rawMin;

  return `${
    stamp.getMonth() + 1
  }/${stamp.getDate()} ${hours}:${minutes} ${timeOfDay}`;
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
