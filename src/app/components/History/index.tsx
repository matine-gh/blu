'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLoansLoading} from "@/store/getLoans/action";

export default function History() {

    // const [loansList, setLoansList] = useState<LoanHistoryInterface[]>([])

    const dispatch = useDispatch();
    const loansHistoryStates = useSelector((state: any)=>state.loansHistory.response);


    useEffect(() => {
        dispatch(getLoansLoading());
    }, []);

    useEffect(() => {
        console.log('loansHistoryStates', loansHistoryStates)
    }, [loansHistoryStates]);


    return (
        <div>
            <h1>تاریخچه</h1>
        </div>
    )
}