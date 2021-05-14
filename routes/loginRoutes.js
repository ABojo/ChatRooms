const router = require('express').Router();
const loginController = require('../controllers/loginController');
const passport = require('passport');

router.get('/', loginController.getLoginPage);
router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: true,
  })
);

module.exports = router;
