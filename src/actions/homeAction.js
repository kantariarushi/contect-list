import * as actionType from "../constants/actionType";

export function showCart(){
    return (dispatch) => {
        return dispatch({ type: actionType.SHOW_CART, value: "rushi"});
    }
};