import { HYDRATE } from 'next-redux-wrapper';
import {GET_LOANS_FAILURE, GET_LOANS_LOADING, GET_LOANS_SUCCESS} from "@/store/getLoans/action";



const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false,
};

export default function getLoansHistoryReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case GET_LOANS_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            }
        case GET_LOANS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case GET_LOANS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            }
        default:
            return state
    }
}