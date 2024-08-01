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
        <div className={'p-8'}>
            <div className={'flex justify-between items-center'}>
                <h1>تاریخچه</h1>
                <a className={'flex items-center text-md text-primary-11 font-bold max-h-10 hover:-translate-x-6 duration-1000'} href={'/'}>
                    <p>بازگشت به تسهیلات</p>
                    <Icons name={'back'} />
                </a>
            </div>
            <Suspense fallback={'load'}>
                <HistoryTable loansHistoryList={loansHistoryList}/>
            </Suspense>

        </div>
    )
}