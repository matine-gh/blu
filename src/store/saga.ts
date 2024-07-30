import {all} from 'redux-saga/effects';
import getLoansHistorySaga from "@/store/getLoans/saga";

function* rootSaga() {
    yield all([
        getLoansHistorySaga()
    ]);
}

export default rootSaga;