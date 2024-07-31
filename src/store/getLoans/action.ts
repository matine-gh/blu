import {LoanInterface} from "@/app/components/Loan/loan.interface";

export const GET_LOANS_LOADING = 'GET_LOANS_LOADING';
export const GET_LOANS_SUCCESS = 'GET_LOANS_SUCCESS';
export const GET_LOANS_FAILURE = 'GET_LOANS_FAILURE';

export const getLoansLoading = () => ({
    type: GET_LOANS_LOADING,
})
export const getLoansSuccess = (response: LoanInterface) => ({
    type: GET_LOANS_SUCCESS,
    response: response
})
export const getLoansFailure = () => ({
    type: GET_LOANS_FAILURE,
})