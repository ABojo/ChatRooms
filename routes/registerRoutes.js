var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController');
const authController = require('../controllers/authController');

router.get(
  '/',
  authController.protectFromAuthed,
  registerController.getRegisterPage
);
router.post('/', authController.protectFromAuthed, registerController.register);

module.exports = router;
