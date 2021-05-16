const Room = require('../models/Room');
const bcrypt = require('bcryptjs');

exports.getCreatePage = async (req, res) => {
  res.render('createRoomForm');
};

exports.create = async (req, res) => {
  try {
    const createObj = {
      name: req.body.name,
      private: req.body.private,
      owner: req.user._id,
      users: [req.user._id],
    };

    if (req.body.password) {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      createObj.password = hashedPass;
    }

    await Room.create(createObj);
    req.flash('success', 'You have succesfully created a new chat room!');
    res.redirect('/');
  } catch (err) {
    let msg = err.message;
    if (err.code === 11000) msg = `${err.keyValue.name} is already taken!`;

    req.flash('error', msg);
    res.redirect('/create');
  }
};
