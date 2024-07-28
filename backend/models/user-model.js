const mongoose = require ("mongoose");

const userschema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique : true,
    },
    role:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:true})

const usermodel = mongoose.model("users",userschema);

module.exports = usermodel;