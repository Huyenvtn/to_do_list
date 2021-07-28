import { combineReducers } from "redux";
import items from "./itemReducer";
const globalState = {items};
const rootReducer = combineReducers(globalState);

export default rootReducer;