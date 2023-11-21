
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    nameProduct:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:false
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

module.exports = mongoose.model('Product', productSchema)