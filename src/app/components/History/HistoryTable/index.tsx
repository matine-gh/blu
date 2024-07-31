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
        }
    }, [loansHistoryStates]);

    const tableHeaders = [
        'نوع وام',
        'مبلغ',
        'تعداد قسط',
        'نرخ بهره',
        'نرخ جریمه',
    ]
    return (
        <div className={'container'+' '+"overflow-x-auto text-center m-auto rounded-xl border-primary-11 border-2"}>
            <table className="w-full text-sm">
                <thead className="text-xs text-secondary-03 bg-primary-11">
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
                        <tr key={loan.id} className=" divide-y-2 divide-primary-11">
                            <td className="px-6 py-4">
                                {loan.name}
                            </td>
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