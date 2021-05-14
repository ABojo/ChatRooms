const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getRegisterPage = (req, res) => {
  console.log(req.sessionID);
  res.render('registerForm');
};

exports.register = async (req, res) => {
  try {
    const { name, username, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm)
      throw new Error('The passwords you provided do not match!');

    const hashedPass = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, username, password: hashedPass });

    req.login(newUser, (err) => {
      if (!err) return res.redirect('/');
    });
  } catch (err) {
    let msg = err.message;
    if (err.code === 11000) msg = `${err.keyValue.username} is already taken!`;

    res.render('registerForm', {
      popUpMessage: {
        status: 'failure',
        text: msg,
      },
    });
  }
};
