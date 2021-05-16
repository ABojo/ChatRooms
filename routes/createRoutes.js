const router = require('express').Router();
const createController = require('../controllers/createController');
const authController = require('../controllers/authController');

router.get('/', authController.protect, createController.getCreatePage);
router.post('/', authController.protect, createController.create);

module.exports = router;
