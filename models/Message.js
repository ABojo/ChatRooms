const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'You must specify a title!'] },
  timestamp: {
    type: Date,
    required: [true, 'You must specift a timestamp!'],
    default: Date.now(),
  },
  text: { type: String, required: [true, 'You must specify text!'] },
});
