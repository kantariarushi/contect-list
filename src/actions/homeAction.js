import * as actionType from "../constants/actionType";

export function showCart(){
    // return (dispatch) => {
    //     return dispatch({ type: actionType.SHOW_CART, value: "rushi"});
    // }

    return { type: actionType.SHOW_CART }
};

export function showCarts(product){
    console.log("products --->", product);
     return (dispatch) => {
            return dispatch({ type: actionType.ADD_CART, value: "rushi"});
        }
}