import {LoanInterface} from "@/app/components/Loan/loan.interface";

export const POST_LOANS_LOADING = 'POST_LOANS_LOADING';
export const POST_LOANS_SUCCESS = 'POST_LOANS_SUCCESS';
export const POST_LOANS_FAILURE = 'POST_LOANS_FAILURE';

export const postLoansLoading = (loanData: LoanInterface) => ({
    type: POST_LOANS_LOADING,
    loanData
})
export const postLoansSuccess = () => ({
    type: POST_LOANS_SUCCESS
})
export const postLoansFailure = () => ({
    type: POST_LOANS_FAILURE,
})