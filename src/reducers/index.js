import { combineReducers } from "redux"; //1
import items from "./itemReducer";
const rootReducer = combineReducers({
    items
});

export default rootReducer;