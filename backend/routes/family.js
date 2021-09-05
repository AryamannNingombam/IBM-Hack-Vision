const express = require('express');
const router = express.Router();
const Middleware = require('../middleware/auth')
const Controller = require('../controller/family');


router.get('/get-families-from-location',Middleware.checkJWT,
Controller.getFamiliesFromLocation)

router.get('/get-prediction-for-family',Middleware.checkJWT,
Controller.getPredictionForFamily);

router.post('/add-family-details',Middleware.checkJWT,
Controller.addFamilyDetails);

router.put("/update-family-details",Middleware.checkJWT,
Controller.updateFamilyDetails);

module.exports = router;
