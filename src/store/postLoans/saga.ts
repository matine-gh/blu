import { takeLatest, put, call } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {POST_LOANS_LOADING, postLoansFailure, postLoansSuccess} from "@/store/postLoans/action";

function* ApiCall(loanData: any): Generator<any> {
    try {
        yield call(
            axiosInterceptorInstance.post,
            `/loans`,
            loanData,
            {
                timeout: Number(process.env.API_TIME_OUT),
            },
        );

        yield put(postLoansSuccess());
    } catch (error: any) {
        yield errorHandling(error, postLoansFailure);
    }
}

export default function* postLoan() {
    yield takeLatest(POST_LOANS_LOADING, ApiCall);
}