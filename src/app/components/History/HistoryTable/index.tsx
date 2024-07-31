import {LoanInterface} from "@/app/components/Loan/loan.interface";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoansLoading} from "@/store/getLoans/action";

export default function HistoryTable() {
    const [loansHistoryList, setLoansHistoryList] = useState<LoanInterface[]>([])

    const dispatch = useDispatch();
    const loansHistoryStates = useSelector((state: any)=>state.loansHistory.response);


    useEffect(() => {
        dispatch(getLoansLoading());
    }, []);

    useEffect(() => {
        if (loansHistoryStates) {
            setLoansHistoryList(loansHistoryStates)
            console.log('aaaaa')
        }
        console.log('loansHistoryStates', loansHistoryStates)
    }, [loansHistoryStates]);

    const tableHeaders = [
        'نوع وام',
        'مبلغ',
        'تعداد قسط',
        'نرخ بهره',
        'نرخ جریمه',
    ]
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>{
                    tableHeaders.map((item) => {
                        return (
                            <th key={item} scope="col" className="px-6 py-3">
                                {item}
                            </th>
                        )
                    })
                }</tr>
                </thead>
                <tbody>
                {loansHistoryList.length && loansHistoryList.map((loan) => {
                    return(
                        <tr key={loan.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {loan.name}
                            </th>
                            <td className="px-6 py-4">
                                {loan.amount}
                            </td>
                            <td className="px-6 py-4">
                                {loan.repaymentType[0].value}
                            </td>
                            <td className="px-6 py-4">
                                <span>{loan.interestRate}</span>
                                <span>درصد</span>
                            </td>
                            <td className="px-6 py-4">
                                <span>{loan.penaltyRate}</span>
                                <span>درصد</span>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    )
}