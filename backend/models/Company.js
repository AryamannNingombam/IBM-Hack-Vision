const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },

    headquarters: {
        type: {
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
        },
        required: true,

    }

})


const Company = mongoose.model('Company', CompanySchema);


module.exports = Company;