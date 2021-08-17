import {handleActions} from "redux-actions";
import * as api from "../lib/api";

// action 정의
const GET_CENTERS = 'center/GET_CENTERS';
const GET_CENTERS_SUCCESS = 'center/GET_CENTERS_SUCCESS';
const GET_CENTERS_FAILURE = 'center/GET_CENTERS_FAILURE';

// action 생성

export const getCenters = () => async dispatch => {
    dispatch({type : GET_CENTERS});
    try {
        const response = await api.getCenters();
        dispatch({
            type : GET_CENTERS_SUCCESS,
            payload : response.data
        });
    } catch (e) {
        dispatch({
            type : GET_CENTERS_FAILURE,
            payload: e,
            error : true
        })
        throw e;
    }
}

const initialState = {
    loading : {
        GET_CENTERS : false
    },
    centers: null
};

const center = handleActions (
    {
        [GET_CENTERS] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_CENTERS : true
            }
        }),
        [GET_CENTERS_SUCCESS] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_CENTERS : false
            },
            centers : action.payload
        }),
        [GET_CENTERS_FAILURE] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_CENTERS : false
            }
        })
    },
    initialState
);

export default center;