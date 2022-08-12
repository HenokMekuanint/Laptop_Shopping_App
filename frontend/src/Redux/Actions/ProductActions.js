import axios from "axios"
import {PRODUCTION_LIST_REQUEST, 
    PRODUCTION_LIST_SUCCESS, 
    PRODUCTION_LIST_FAIL} from "../Constants/ProductConstants"
export const listProduct = ()=> async (dispatch)=>{
    try{
        dispatch({type:PRODUCTION_LIST_REQUEST})
        const {data}=await axios.get("api/products");
        dispatch({type:PRODUCTION_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:PRODUCTION_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            :error.message,
        })
    }
}