const express = require("express");
const router = express.Router();
const { homePageCtrl, LoginPageCtrl } = require('../controllers/SMSController');

router.route('/').get(homePageCtrl)
router.route('/login').get(LoginPageCtrl)


module.exports = router;
