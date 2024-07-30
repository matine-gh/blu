import { combineReducers } from '@reduxjs/toolkit';
import getLoansHistoryReducer from "@/store/getLoans/reducer";
const rootReducer = combineReducers({

    loansHistory: getLoansHistoryReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
