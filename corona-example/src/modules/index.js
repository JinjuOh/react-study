import center from './center';
import loading from './loading';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    center,
    loading
});

export default rootReducer;