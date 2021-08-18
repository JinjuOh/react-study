import center, {centerSaga} from './center';
import loading from './loading';
import {combineReducers} from "redux";
import {all} from "@redux-saga/core/effects";

const rootReducer = combineReducers({
    center,
    loading
});

export function* rootSaga() {
    yield all([centerSaga()]);
}

export default rootReducer;