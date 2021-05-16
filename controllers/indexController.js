const Room = require('../models/Room');

exports.getHomePage = async (req, res) => {
  const rooms = await Room.find();
  res.render('index', { rooms });
};
