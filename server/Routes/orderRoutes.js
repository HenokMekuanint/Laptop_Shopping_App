import express from 'express';
import asyncHandler from "express-async-handler";
import Order from "./../Models/OrderModels.js";
import protect from "../Middleware/AuthMiddleware.js"
const orderRouter=express.Router();
// LOGIN
orderRouter.post(
    "/",
    protect,
    asyncHandler(async (req,res)=>{
        const { orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice}=req.body;
            if (orderItems && orderItems.length===0) {
                res.status(400)
                throw new Error("No order items")
                return
            } else {
                const order = new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
                })
            const createOrder = await order.save();
            res.status(201).json(createOrder);
            }
    }
    )


);
export default orderRouter;