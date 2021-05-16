const Room = require('../models/Room');

exports.getRoomPage = async (req, res) => {
  const { name } = req.params;
  const room = await Room.findOne({ name });

  res.render('room', { room });
};
