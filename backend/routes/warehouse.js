const express = require('express');
const router = express.Router();
const Middlware = require('../middleware/auth');
const Controller = require('../controllers/warehouse');

router.get('/get-warehouses-on-pincode', Middlware.checkJWT,
    Controller.getWarehousesOnPinCode);

router.get('/get-warehouses-on-city', Middleware.checkJWT,
    Controller.getWarehousesOnCity);

router.get('/get-warehouses-on-state', Middleware.checkJWT,
    Controller.getWarehousesOnState)

router.get("/get-warehouses-on-filtering", Middlware.checkJWT,
    Controller.getWarehousesOnFiltering);


module.exports = router;