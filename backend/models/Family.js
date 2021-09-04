const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FamilySchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    previousNumberOfOrders: {
        type: Number,
        required: true,
        default: 0
    },
    ageGroups: {
        type: {
            zeroToFive: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            },
            fiveToFifteen: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            },
            fifteenToTwentyFive: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            },
            twentyFiveToForty: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            },
            fortyToSixty: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            },
            sixtyPlus: {
                type: {
                    male: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    },
                    female: {
                        type: {
                            healthy: {
                                type: Number,
                                required: true,
                                default: 0
                            },
                            unhealthy: {
                                type: Number,
                                required: true,
                                default: 0
                            }

                        },
                        required: true,
                    }
                },
                required: true,

            }
        },
        required: true,
    },
    foodPreference: {
        type: {
            veg: {
                type: Number,
                required: true,
                default: 0
            },
            nonVeg: {
                type: Number,
                required: true,
                default: 0
            },
            vegan: {
                type: Number,
                required: true,
                default: 0
            }
        },
        required: true,
    },
})


const FamilyModel = mongoose.model('Family',FamilySchema);
module.exports = FamilyModel;