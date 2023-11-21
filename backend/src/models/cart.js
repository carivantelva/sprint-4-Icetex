const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    nameProduct:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    cant:{
        type: Number,
        require: true
    }

});

module.exports = mongoose.model('Cart', cartSchema)