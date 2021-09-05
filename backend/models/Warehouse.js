const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WarehouseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ownerDetails: {
        type: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: false,
                match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            },
            phoneNumber: {
                type: Number,
                required: true,
            }
        },
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})

const WarehouseModel = mongoose.model("Warehouse", WarehouseSchema);

module.exports = WarehouseModel;