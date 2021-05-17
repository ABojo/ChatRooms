const router = require('express').Router();
const roomController = require('../controllers/roomController');

router.get('/:name', roomController.protectRoom, roomController.getRoomPage);
router.post('/:name/send', roomController.sendMessage);

module.exports = router;
