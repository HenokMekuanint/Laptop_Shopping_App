import { createStore , combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { productListReducer,productDetailsReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducer";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./Reducers/userReducer";
import { userUpdateProfileReducer } from "./Reducers/userReducer";
import { orderCreateReducer } from "./Reducers/OrderReducer";
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderCreateReducer,

})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];
//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;
//shippingAddress
const shippingAddressLocalStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {};


const initialState={
    cart:{
        cartItems:cartItemsFromLocalStorage,
        shippingAddress:shippingAddressLocalStorage,
    },
    userLogin:{userInfo:userInfoFromLocalStorage }
}
const middleware=[thunk]  
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store