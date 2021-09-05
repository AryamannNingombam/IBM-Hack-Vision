const WarehouseModel = require('../models/Warehouse');



exports.getWarehousesOnPinCode = (req, res, next) => {
    const pincode = req.header("pincode");
    if (!pincode) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    WarehouseModel.find({
            princode
        })
        .then(warehouses => {
            return res.status(200)
                .json({
                    success: true,
                    warehouses
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

exports.getWarehousesOnCity = (req, res, next) => {
    const city = req.header("city");
    if (!city) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    WarehouseModel.find({
            city
        })
        .then(warehouses => {
            return res.status(200)
                .json({
                    success: true,
                    warehouses
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


exports.getWarehousesOnState = (req, res, next) => {
    const state = req.header("state");
    if (!state) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    WarehouseModel.find({
            state
        })
        .then(warehouses => {
            return res.status(200)
                .json({
                    success: true,
                    warehouses
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


exports.getWarehousesOnFiltering = (req, res, next) => {
    const {
        pincode,
        city,
        state,
        country
    } = req.headers;
    if (!pincode || !city || !state || !country) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    const cityRegex = new RegExp(`^.*${city}.*$`, 'i');
    const stateRegex = new RegExp(`^.*${state}.*$`, 'i');
    const countryRegex = new RegExp(`^.*${country}.*$`, 'i');
    WarehouseModel.find({
            pincode,
            city: {
                $regex: cityRegex
            },
            state: {
                $regex: stateRegex
            },
            country: {
                $regex: countryRegex
            }
        })
        .then(warehouses => {
            return res.status(200)
                .json({
                    success: true,
                    warehouses
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