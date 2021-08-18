import {createAction, handleActions} from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";
import {finishLoading, startLoading} from "./loading";
import {call, put, takeLatest} from "@redux-saga/core/effects";
import createRequestSaga from "../lib/createRequestSaga";

// action 정의
const GET_CENTERS = 'center/GET_CENTERS';
const GET_CENTERS_SUCCESS = 'center/GET_CENTERS_SUCCESS';
const GET_CENTERS_FAILURE = 'center/GET_CENTERS_FAILURE';

// action 생성

// export const getCenters = () => async dispatch => {
//     dispatch({type : GET_CENTERS});
//     try {
//         const response = await api.getCenters();
//         dispatch({
//             type : GET_CENTERS_SUCCESS,
//             payload : response.data
//         });
//     } catch (e) {
//         dispatch({
//             type : GET_CENTERS_FAILURE,
//             payload: e,
//             error : true
//         })
//         throw e;
//     }
// }

export const getCenters = createAction(GET_CENTERS);

// function* getCentersSaga() {
//     yield put(startLoading(GET_CENTERS));
//     try {
//         const centers = yield call(api.getCenters);
//         console.log(centers);
//         yield put({
//             type : GET_CENTERS_SUCCESS,
//             payload : centers.data
//         });
//     } catch (e) {
//         yield put({
//             type : GET_CENTERS_FAILURE,
//             payload : e,
//             error : true
//         });
//     }
//     yield put(finishLoading(GET_CENTERS));
// }

const getCentersSaga = createRequestSaga(GET_CENTERS, api.getCenters);

export function* centerSaga() {
    yield takeLatest(GET_CENTERS, getCentersSaga);
}


const initialState = {
    // loading : {
    //     GET_CENTERS : false
    // },
    centers: null
};

const center = handleActions (
    {
        // [GET_CENTERS] : state => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_CENTERS : true
        //     }
        // }),
        [GET_CENTERS_SUCCESS] : (state, action) => ({
            ...state,
            // loading : {
            //     ...state.loading,
            //     GET_CENTERS : false
            // },
            centers : action.payload
        }),
        // [GET_CENTERS_FAILURE] : (state, action) => ({
        //     ...state,
        //     loading : {
        //         ...state.loading,
        //         GET_CENTERS : false
        //     }
        // })
    },
    initialState
);

export default center;