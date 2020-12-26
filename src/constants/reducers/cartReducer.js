import * as actionType from "../actionType";

const initialState = {
    cart: {},
  };
  
  export default (state = initialState, action) => {
    console.log("action.data --->", action);
    switch (action.type) {
      case actionType.ADD_CART:
        return {
          ...state,
          cart: action?.value,
        };  
      default:
        return state;
    }
  };
  