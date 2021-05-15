const router = require('express').Router();
const createController = require('../controllers/createController');

router.get('/', createController.getCreatePage);
router.post('/', createController.create);

module.exports = router;
