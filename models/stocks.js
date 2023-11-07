const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter stock title'],
        trim: true
    },
    0:{
        type: String
    },
    1:{
        type: String
    },
    2:{
        type: String
    },
    3:{
        type: String
    },
    4:{
        type: String
    },
    5:{
        type: String
    },
    6:{
        type: String
    },
    7:{
        type: String
    },
    8:{
        type: String
    },
    9:{
        type: String
    },
    10:{
        type: String
    }
})

module.exports = mongoose.model('stock', stockSchema)