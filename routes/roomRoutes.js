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

router.post('/:name/join', authController.protect, roomController.joinRoom);

module.exports = router;
