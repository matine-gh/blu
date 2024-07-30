import {all} from 'redux-saga/effects';
import getLoansHistorySaga from "@/store/getLoans/saga";
import postLoan from "@/store/postLoans/saga";

function* rootSaga() {
    yield all([
        getLoansHistorySaga(),
        postLoan()
    ]);
}

export default rootSaga;