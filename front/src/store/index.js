import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/items";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
