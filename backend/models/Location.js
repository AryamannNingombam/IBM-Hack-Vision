const mongoose = require('mongoose');
const Schema = new mongoose.Schema();

const LocationSchema = new Schema({
    building: {
        type: String,
        required: true,
        unique: true,
    },
    street: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: false
    },
    pinCode: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
    }
})


const LocationModel = mongoose.model('Location',LocationSchema);


module.exports = LocationModel;