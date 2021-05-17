const router = require('express').Router();
const roomController = require('../controllers/roomController');
const authController = require('../controllers/authController');

router.get(
  '/:name',
  authController.protect,
  roomController.protectRoom,
  roomController.getRoomPage
);

router.post(
  '/:name/send',
  authController.protect,
  roomController.protectRoom,
  roomController.sendMessage
);

module.exports = router;
