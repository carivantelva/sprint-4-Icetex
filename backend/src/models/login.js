const mongoose = require("mongoose");




const loginSchema = mongoose.Schema({
    userName:{
        type:String,
       
    },
    password:{
        type: Number,
       
    },
   
});

module.exports = mongoose.model('Login',loginSchema)


