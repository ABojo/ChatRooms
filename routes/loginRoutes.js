const router = require('express').Router();
const loginController = require('../controllers/loginController');
const authController = require('../controllers/authController');
const passport = require('passport');

router.get('/', authController.protectFromAuthed, loginController.getLoginPage);
router.post(
  '/',
  authController.protectFromAuthed,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: true,
  })
);

module.exports = router;
