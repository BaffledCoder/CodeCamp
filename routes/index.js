const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller.js');
console.log(homeController.home);
router.get('/',homeController.home);
router.use('/users', require('./users.js'));
module.exports = router;