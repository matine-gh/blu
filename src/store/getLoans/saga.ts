
import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/store/axios";
import errorHandling from "@/store/_utils/errorHandling";
import {GET_LOANS_LOADING, getLoansFailure, getLoansSuccess} from "@/store/getLoans/action";

function* ApiCall(): Generator<any> {
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            '/loans',
            {
                timeout: Number(process.env.API_TIME_OUT),
            });
        yield put(getLoansSuccess(response.data));
    } catch (error: any) {
        yield errorHandling(error, getLoansFailure);
    }
}

export default function* getLoansHistorySaga() {
    yield takeLatest(GET_LOANS_LOADING, ApiCall);
}