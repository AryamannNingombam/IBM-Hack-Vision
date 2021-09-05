const express = require('express');
const router = express.Router();
const Middleware = require('../middleware/auth');
const Controller = require('../controllers/company');

router.get("/get-company-details", Middleware.checkJWT, Controller.getCompanyDetails);


module.exports = router;