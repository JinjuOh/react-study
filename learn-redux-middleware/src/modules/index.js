import counter from "./counter";
import {combineReducers} from "redux";
import sample from "./sample";

const rootReducer = combineReducers({
    counter, sample
});

export default rootReducer;