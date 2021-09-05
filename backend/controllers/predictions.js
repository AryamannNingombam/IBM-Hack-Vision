const WarehouseModel = require('../models/Warehouse');
const PredictionModel = require('../models/Prediction');


exports.addPrediction = (req, res, next) => {
    const {
        warehouse,
        estimatedDateOfDispatch,
        companyId,
        orderDetails
    } = req.body;
    if (!warehouse || !estimatedDateOfDispatch || !companyId || !orderDetails) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    PredictionModel.create(req.body)
        .then(newPrediction => {
            console.log("New prediction added");
            return res.status(200)
                .json({
                    success: true,
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}

exports.getPredictionDetails = (req, res, next) => {
    const {
        _id
    } = req.headers;
    if (!_id) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    PredictionModel.findById({
            _id
        })
        .then(prediction => {
            return res.status(200)
                .json({
                    success: true,
                    prediction
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}



exports.getAllPredictionsForWarehouse = async (req, res, next) => {
    const _id = req.headers._id;
    const lowerLimit = new Date(req.headers.lowerLimit);
    const upperLimit = new Date(req.headers.upperLimit);


    if (!_id) {
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    try {
        const allOrders = await PredictionModel.find({
            warehouse: _id,
            estimatedDateOfDispatch: {
                $gt: lowerLimit,
                $lt: upperLimit
            }

        });
        let result = {
            totalRice: 0,
            totalWheat: 0,
            totalEggs: 0,
            totalMilk: 0,
            totalSugar: 0,
            totalFruits: 0,
            totalChicken: 0,
            totalFish: 0
        }
        for (let order of allOrders) {
            result.totalRice += order.orderDetails.rice.qty;
            result.totalWheat += order.orderDetails.wheat.qty;
            result.totalEggs += order.orderDetails.eggs.qty;
            result.totalMilk += order.orderDetails.milk.qty;
            result.totalSugar += order.orderDetails.sugar.qty;
            result.totalFruits += order.orderDetails.fruits.qty;
            result.totalChicken += order.orderDetails.chicken.qty;
            result.totalFish += order.orderDetails.fish.qty;
        }
        console.log(result);
        return res.status(200)
            .json({
                success: true,
                orders: result
            })

    } catch (err) {
        console.log("ERROR");
        console.log(err);
        return res.status(500)
            .json({
                success: false,
                message: "Unknown server error!"
            })
    }
}