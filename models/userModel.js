const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    name: {
        String,
        required: [true, 'Please add a name'],
    },
    email: {
        String,
        required: [true, 'Please add an email'],
        unique:true,
    },
    password:{
        String,
        required: [true, 'Please add a password'],
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)