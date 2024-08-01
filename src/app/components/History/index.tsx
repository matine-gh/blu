'use client'
import HistoryTable from "@/app/components/History/HistoryTable";
import Icons from "../../../../public/Icons";
import {lazy, Suspense, useEffect, useState} from "react";
import {LoanInterface} from "@/app/components/Loan/loan.interface";
import {useDispatch, useSelector} from "react-redux";
import {getLoansLoading} from "@/store/getLoans/action";

export default function History() {
    const [loansHistoryList, setLoansHistoryList] = useState<LoanInterface[]>([])

    const dispatch = useDispatch();
    const loansHistoryStates = useSelector((state: any)=>state.loansHistory);

    const HistoryTable = lazy(() => import('@/app/components/History/HistoryTable'));

    useEffect(() => {
        dispatch(getLoansLoading());
    }, []);

    useEffect(() => {
        if (loansHistoryStates.isDone) {
            setLoansHistoryList(loansHistoryStates.response)
        }
    }, [loansHistoryStates.isDone]);

    useEffect(() => {
        console.log('loansHistoryList===========', loansHistoryList)
    }, [loansHistoryList]);

    return (
        <div>
            <h1>تاریخچه</h1>
            <HistoryTable />
        </div>
    )
}