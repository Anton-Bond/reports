const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.get('/', controller.getAll);

router.post('/addNew', controller.create);

router.get('/:userId', controller.findByUserId);

router.put('/:userId', controller.updateByUserId);

router.put('/:userId/passw', controller.updateUserPassw);

router.delete('/:userId', controller.removeByUserId);

module.exports = router;
