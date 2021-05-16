const router = require('express').Router();
const roomController = require('../controllers/roomController');

router.get('/:name', roomController.getRoomPage);

module.exports = router;
