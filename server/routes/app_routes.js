const express = require('express');
const controller = require('../controllers/v1');

const router = express.Router();

router.route('/authenticate').post(controller.app_controller.Authenticate);
router.route('/logout').post(controller.app_controller.Logout);


module.exports = router;
