import {finishLoading, startLoading} from "../modules/loading";
import {call, put} from "@redux-saga/core/effects";

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action) {
        yield put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type : SUCCESS,
                payload : response.data
            });
        } catch (e) {
            yield put({
                type : FAILURE,
                payload : e,
                error : true
            });
        }
        yield put(finishLoading());
    }
}

// 사용법 : createRequestThunk(`GET_USERS`, api.getUsers)