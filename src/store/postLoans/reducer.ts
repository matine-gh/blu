import { HYDRATE } from 'next-redux-wrapper';
import {POST_LOANS_FAILURE, POST_LOANS_LOADING, POST_LOANS_SUCCESS} from "@/store/postLoans/action";



const initialState = {
    isDone: false,
    isLoading: false,
    response: '',
    loanData: {},
    hasError: false,
};

export default function postLoanReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
                isDone: false,
            }
        case POST_LOANS_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                loanData: action.data
            }
        case POST_LOANS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case POST_LOANS_FAILURE:
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