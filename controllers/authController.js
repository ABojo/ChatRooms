exports.protect = (req, res, next) => {
  if (!req.user) {
    req.flash('error', 'Sorry, you must be logged in to do that!');
    res.redirect('/');
  } else {
    next();
  }
};

exports.protectFromAuthed = (req, res, next) => {
  if (req.user) {
    req.flash('error', 'You are already logged in!');
    res.redirect('/');
  } else {
    next();
  }
};
