exports.logout = (req, res) => {
  req.flash('success', 'You have been successfully logged out!');
  req.logout();
  res.redirect('/');
};
