const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WarehouseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type:String,
        required: true,
    }
})

const WarehouseModel = mongoose.model("Warehouse", WarehouseSchema);

module.exports = WarehouseModel;