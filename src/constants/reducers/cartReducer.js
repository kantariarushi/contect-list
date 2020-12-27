import * as actionType from "../actionType";

const initialState = {
    cart: {},
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case actionType.ADD_DATA:
        return {
          ...state,
          cart: action.value,
        };  
      default:
        return state;
    }
  };
  