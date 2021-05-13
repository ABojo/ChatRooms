const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getRegisterPage = (req, res) => {
  res.render('registerForm');
};

exports.register = async (req, res) => {
  const { name, username, password, passwordConfirm } = req.body;

  if (password === passwordConfirm) {
    const hashedPass = await bcrypt.hash(password, 12);
    await User.create({ name, username, password: hashedPass });
    res.render('index', {
      popUpMessage: {
        status: 'success',
        text: 'You have successfully created a new account!',
      },
    });
  } else {
    res.render('registerForm', {
      popUpMessage: {
        status: 'failure',
        text: 'The passwords you have provided did not match!',
      },
    });
  }
};
