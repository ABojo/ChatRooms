exports.protect = (req, res, next) => {
  if (!req.user) {
    req.flash('error', 'Sorry, you must be logged in to do that!');
    res.redirect('/');
  } else {
    next();
  }
};
