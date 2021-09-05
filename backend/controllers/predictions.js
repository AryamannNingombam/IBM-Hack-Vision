const WarehouseModel = require('../models/Warehouse');
const PredictionModel = require('../models/Prediction');

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
            estimatedDateOfDispatch:{
                $gt:lowerLimit,
                $lt:upperLimit
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