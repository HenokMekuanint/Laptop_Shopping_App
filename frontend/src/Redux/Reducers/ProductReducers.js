import { PRODUCTION_LIST_REQUEST ,PRODUCTION_LIST_SUCCESS,PRODUCTION_LIST_FAIL} from "../Constants/ProductConstants";
import { PRODUCTION_DETAIL_REQUEST ,PRODUCTION_DETAIL_SUCCESS,PRODUCTION_DETAIL_FAIL} from "../Constants/ProductConstants";

export const productListReducer=(state={products:[]},action)=>{
    switch(action.type){
        case PRODUCTION_LIST_REQUEST:
            return { loading:true,products:[]};
        case PRODUCTION_LIST_SUCCESS:
            return { loading:false, products:action.payload};
        case PRODUCTION_LIST_FAIL:
            return { loading:false,error:action.payload};
        default:
            return state;
    }
}

export const productDetailReducer=(state={products:{reviews:[]}},action)=>{
    switch(action.type){
        case PRODUCTION_DETAIL_REQUEST:
            return { ...state,loading:true };
        case PRODUCTION_DETAIL_SUCCESS:
            return { loading:false, product:action.payload};
        case PRODUCTION_DETAIL_FAIL:
            return { loading:false,error:action.payload};
        default:
            return state;
    }
}