const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const OrderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    receiver: {
        type: String,
        required: true,
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
    specialFeautures: {
        type: {
            festivalOrGuest: {
                type: Boolean,
                required: true,
                default: false,
            },
            holidays: {
                type: Boolean,
                required: true,
                default: false,
            }

        },
        required: true,
    }

})


const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;