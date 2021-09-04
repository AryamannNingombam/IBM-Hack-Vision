const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PredictionSchema = new Schema({
    warehouse: {
        type: String,
        required: true,
    },
    estimatedDateOfDispatch: {
        type: Date,
        required: true,
        default: Date.now()
    },
    companyId: {
        type: String,
        required: true,
    },
    orderDetails: {
        type: {
            rice: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            wheat: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            eggs: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            milk: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            sugar: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            fruits: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            chicken: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            },
            fish: {
                qty: {
                    type: Number,
                    required: true,
                    default: 0
                },
                duration: {
                    type: Number,
                    required: true,
                }
            }
        },
        required: true,
    },

})


const PredictionModel = mongoose.model("Prediction",PredictionSchema);

module.exports = PredictionModel;