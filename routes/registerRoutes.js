var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/', registerController.getRegisterPage);
router.post('/', registerController.register);

module.exports = router;
