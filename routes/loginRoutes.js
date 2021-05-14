const router = require('express').Router();
const loginController = require('../controllers/loginController');
const passport = require('passport');

router.get('/', loginController.getLoginPage);
router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

module.exports = router;
