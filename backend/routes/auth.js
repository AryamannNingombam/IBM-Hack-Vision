const express = require('express');
const Controller = require('../controllers/auth');
const router = express.Router();



router.post('/sign-in-company', Controller.signInCompany);

router.post('/sign-up-company', Controller.signUpCompany);