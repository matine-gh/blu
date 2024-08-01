import {LoanInterface} from "@/app/components/Loan/loan.interface";

interface HistoryTableProps {
    loansHistoryList: LoanInterface[];
}
export default function HistoryTable(loansHistoryList: HistoryTableProps) {

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
                            <th key={item} scope="col" className="px-6 py-3 text-lg">
                                {item}
                            </th>
                        )
                    })
                }</tr>
                </thead>
                <tbody className=" divide-y-2 divide-primary-11">
                {loansHistoryList.loansHistoryList.map((loan) => {
                    return(
                        <tr key={loan.id} className={'hover:bg-primary-01'} >
                            <td className="px-6 py-4 font-semibold">
                                {loan.name}
                            </td>
                            <td className="px-6 py-4">
                                {loan.amount.toLocaleString()}
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