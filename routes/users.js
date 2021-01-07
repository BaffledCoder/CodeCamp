const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller.js');
console.log('Router loaded');
router.get('/',usersController.profile);
module.exports = router;