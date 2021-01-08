const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller.js');
console.log(usersController.profile);
router.get('/users',usersController.profile);
module.exports = router;