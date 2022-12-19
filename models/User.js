const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
    unsername:{
        type: String, 
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
})

mongoose.model("users", User)