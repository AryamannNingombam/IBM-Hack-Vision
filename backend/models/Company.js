const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');



const CompanySchema = new Schema({
    username: {
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

// create a jwt with the user payload
CompanySchema.methods.generateAuthToken = function(payload) {
    token = jwt.sign(
        payload,
        process.env.JWT_TOKEN_HASH,
        { expiresIn: 360000 }
    );
    return token;
}

const Company = mongoose.model('Company', CompanySchema);


module.exports = Company;