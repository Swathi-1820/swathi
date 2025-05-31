const express = require('express')
const userRouter = express.Router();
const { SignUp, Login } = require('../controllers/userController')
userRouter.post('/signup',SignUp);
userRouter.post('/login',Login);


module.exports = userRouter


Controllers/userControllers.js
const User = require("../models/user");


exports.SignUp= async(req,res)=>{
    const {username,password} = req.body;
     const exist = await User.findOne({username,password
})
    if(exist) return res.status(404).json({mesage:"User already Exist"})
    const newUser = new User({username,password})
    await newUser.save();
    res.status(201).json({
        message:"User Created successfully",
        user:newUser
    })
}
exports.Login= async (req,res)=>{
    const {username,password} = req.body;
    const exist = await User.findOne({username})
    if(!exist) return res.status(404).json({mesage:"Given username and password is not valid"})
    res.status(201).json({
        message:"User Login successfully",
    })
}
