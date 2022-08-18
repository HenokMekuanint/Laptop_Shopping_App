import express from 'express';
import asyncHandler from "express-async-handler";
import User from '../Models/UserModel.js';

const userRoute=express.Router();
// LOGIN
userRoute.post(
    "/login",
    asyncHandler(async (req,res)=>{
        const {email,password} =req.body;
        const user =await User.findOne({ email });
        if (user && (await user.matchPasswords(password))) {
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:null,
                createdAt:user.createdAt,

            })
            
        } else {
            res.status(401);
            throw new Error("Invalid Email or Password");
            
        }
    })
);
export default userRoute;