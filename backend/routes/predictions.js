const express = require('express');
const router = express.Router();
const Middleware = require('../middleware/auth');
const Controller = require('../controllers/predictions');

router.post('/add-prediction',Middleware.checkJWT,Controller.addPrediction);

router.get('/get-prediction-details',Middleware.checkJWT,
Controller.getPredictionDetails);

router.get('/get-all-predictions-for-warehouse',Middleware.checkJWT,
Controller.getAllPredictionsForWarehouse);


module.exports = router;