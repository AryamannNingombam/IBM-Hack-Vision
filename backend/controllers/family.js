const FamilyModel = require('../models/Family');

exports.getPredictionForFamily = async (req, res, next) => {
    const {
        _id
    } = req.headers;
    if (!_id) {
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    try {
        const familyDetails = await FamilyModel.findById({
            _id
        });
        const previousOrders = await OrderModel.find({
            receiver: _id
        });
        const prediction = {};
        //input would have prviou order details, family details;

        return res.status(200)
            .json({
                success: true,
                prediction
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