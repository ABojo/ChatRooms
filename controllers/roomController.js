const Room = require('../models/Room');
const Message = require('../models/Message');

exports.getRoomPage = async (req, res) => {
  const { name } = req.params;
  const room = await Room.findOne({ name }).populate('messages');

  res.render('room', { room });
};

exports.sendMessage = async (req, res) => {
  const { name } = req.params;
  const room = await Room.findOne({ name });

  try {
    const message = await Message.create({
      text: req.body.text,
      sender: req.user.username,
    });

    room.messages.push(message._id);
    await room.save();
    req.flash('success', 'Message sent!');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Failed to send your message!');
  }

  res.redirect(room.url);
};
