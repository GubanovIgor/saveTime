import { actionTypes } from "../types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload ? action.payload : [],
      };
    default:
      return state;
  }
};
