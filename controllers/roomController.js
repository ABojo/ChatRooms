const Room = require('../models/Room');
const Message = require('../models/Message');

exports.protectRoom = async (req, res, next) => {
  const { name } = req.params;
  const room = await Room.findOne({ name });

  if (!room.private) return next();
  if (room.users.includes(req.user._id)) return next();

  res.render('joinRoom', { room: room });
};

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
  } catch (err) {
    console.log(err);
    req.flash('error', 'Failed to send your message!');
  }

  res.redirect(room.url);
};
