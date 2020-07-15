import { actionTypes } from "../types";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
