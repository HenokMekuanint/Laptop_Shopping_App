import axios from "axios"
import { CART_REMOVE_ITEM } from "../Constants/CartConstants";

export const addToCart = (id,qty) => async(dispatch,getState) =>{
    const {data} =await axios.get(`/api/products/${id}`);
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:{
            product:data.id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty,

        },
    });
    localStorage.setItem("cartItems" ,JSON.stringify(getState().cart.cartItems));
}