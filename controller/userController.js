const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");



const registerUser = asyncHandler (async (req, res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    res.status(200).json({message: "user registered!"})
})
const loginUser = asyncHandler(async(req, res)=>{
    res.status(200).json({message: "user login!"})
})
const getUser = asyncHandler(async(req, res)=>{
    res.status(200).json({message: "display user data!"})
})



module.exports = {
    registerUser,
    loginUser,
    getUser
}