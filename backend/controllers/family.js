const FamilyModel = require('../models/Family');





exports.getFamiliesFromLocation = (req, res, next) => {
    const {
        locationId
    } = req.headers;
    if (!locationId) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    FamilyModel.find({
            location: locationId
        })
        .then(families => {
            return res.status(200)
                .json({
                    success: true,
                    families
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


exports.addFamilyDetails = (req, res, next) => {
    const {
        location,
        previousNumberOfOrders,
        ageGroups,
        foodPreference
    } = req.body;
    if (!location || !previousNumberOfOrders || !ageGroups || !foodPreference) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }

    FamilyModel.create({
            location,
            previousNumberOfOrders,
            ageGroups,
            foodPreference
        })
        .then(newFamily => {
            console.log("New family details added!");
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


exports.updateFamilyDetails = (req, res, next) => {
    const {
        _id,
        location,
        previousNumberOfOrders,
        ageGroups,
        foodPreference
    } = req.body;
    if (!_id || !location || !previousNumberOfOrders || !ageGroups || !foodPreference) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    FamilyModel.findByIdAndUpdate({
            _id
        }, {
            location,
            previousNumberOfOrders,
            ageGroups,
            foodPreference
        }, {
            new: true
        })
        .then(updated => {
            console.log("Family details updated!")
            return res.status(200)
                .json({
                    success: true,
                    updated
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err)
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}