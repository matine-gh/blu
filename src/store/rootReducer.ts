import { combineReducers } from '@reduxjs/toolkit';
import getLoansHistoryReducer from "@/store/getLoans/reducer";
import postLoanReducer from "@/store/postLoans/reducer";
const rootReducer = combineReducers({

    loansHistory: getLoansHistoryReducer,
    postLoan: postLoanReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
