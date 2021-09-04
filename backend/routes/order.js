const express = require('express')
const router = express.Router();
const Middleware = require('../middleware/auth');
const Controller = require('../controllers/order');


router.get('/get-order-details', Middleware.checkJWT,
    Controller.getOrderDetails);

router.post('/add-new-order', Middleware.checkJWT, Controller.addNewOrder)

router.get('/get-previous-orders', Middleware.checkJWT, Controller.getPreviousOrders);