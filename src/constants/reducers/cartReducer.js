import * as actionType from "../actionType";

const initialState = {
    cart: {},
    profile:{}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case actionType.ADD_DATA:
        return {
          ...state,
          cart: action.value,
        };  
      case actionType.ADD_PROFILE:
        return {
          ...state,
          profile: action.value,
        };  
      default:
        return state;
    }
  };
  