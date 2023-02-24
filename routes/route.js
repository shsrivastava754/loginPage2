const express = require('express');
const router = express.Router();
const login = require('../controllers/loginController');
const signup = require('../controllers/signupController');
const indexPage = require('../controllers/indexController');
const emailLogin = require('../controllers/emailLogin');
const path = require('path');

router.get('/',login.login);
router.get('/signup',signup.signup);
router.get('/emailLogin',emailLogin.emailLogin);
router.get('/index',indexPage);

router.post('/signupPost',signup.register);
router.post('/loginPost',login.postLogin);
router.post('/emailPost',emailLogin.postEmail);

module.exports = router;
