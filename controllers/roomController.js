const Room = require('../models/Room');
const Message = require('../models/Message');

exports.getRoomPage = async (req, res) => {
  const { name } = req.params;
  const room = await Room.findOne({ name });

  res.render('room', { room });
};

exports.sendMessage = async (req, res) => {
  const { name } = req.params;
  const room = await Room.findOne({ name });
};
