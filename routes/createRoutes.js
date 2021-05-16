const router = require('express').Router();
const createController = require('../controllers/createController');
const protectController = require('../controllers/protectController');

router.get('/', protectController.protect, createController.getCreatePage);
router.post('/', protectController.protect, createController.create);

module.exports = router;
