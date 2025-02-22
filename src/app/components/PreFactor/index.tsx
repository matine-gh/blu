'use client'
import ToKeyValue from "@/app/components/Common/ToKeyValue";
import calculatePenalty from "@/app/utils/calculatePenalty";
import calculatePayment from "@/app/utils/calculatePayment";
import {Dispatch, Fragment, SetStateAction, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postLoansHydrate, postLoansLoading} from "@/store/postLoans/action";
import {v4 as uuidv4} from 'uuid';
import {LoanInterface} from "@/app/components/Loan/loan.interface";
import {put} from "redux-saga/effects";

export default function PreFactor({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {

    const [checked, setChecked] = useState<boolean>(false)

    const dispatch = useDispatch();
    const loanData: LoanInterface = JSON.parse(sessionStorage.getItem('selectedLoanInformation') || "[]")

    const postLoanStates = useSelector((state: any)=>state.postLoan);

    useEffect(() => {
        if (postLoanStates.isDone) {
            sessionStorage.clear()
            put(postLoansHydrate)
            setStep(5)
        }

    }, [postLoanStates.isDone]);

    const dataArray = [
        {name: 'مبلغ', value: loanData.amount.toLocaleString()},
        {name: 'مدت زمان بازپرداخت', value: loanData.repaymentType[0].name},
        {name: 'تعداد اقساط', value: loanData.repaymentType[0].value},
        {
            name: 'مبلغ قسط ماهیانه',
            value: `${calculatePayment(loanData.amount,loanData.interestRate || loanData.percentageRate || 0,loanData.repaymentType[0].value).toLocaleString()}ریال `},
        {name: 'درصد سود سالیانه', value: `${loanData.interestRate}درصد `},
        {name: 'مبلغ جریمه دیرکرد', value: `${calculatePenalty(loanData.amount,loanData.penaltyRate || 0).toLocaleString()}ریال `},
    ]

    return (
        <div
            className={"bg-secondary-17 bg-opacity-40 fixed inset-0 w-full h-full z-50"}>
            <div
                className={"bg-secondary-01 right-0 rounded-2xl z-2 max-w-112 m-auto shadow-lg absolute inset-0 h-fit pb-14 pt-8 text-center max-w-lg md:w-1/2 max-md:w-11/12"}>
                <div className={'container'+' '+'p-8 text-start space-y-3'}>
                    <h1 className={'text-center'}>فرم تایید اطلاعات</h1>
                    {dataArray.map((item)=>{
                        return (
                            <Fragment key={item.name}>
                                <ToKeyValue {...item} />
                            </Fragment>
                        )
                    })}

                    <div className="flex items-center py-8">
                        <input id="agree-checkbox"
                               type="checkbox"
                               checked={checked}
                               onChange={()=>setChecked(!checked)}
                               className="w-4 h-4 text-primary bg-secondary-02 border-secondary rounded focus:ring-primary-12 focus:ring-2" />
                        <label htmlFor="agree-checkbox" className="ms-2 text-xs font-medium text-secondary-17">
                            اطلاعات فوق را تایید میکنم.
                        </label>
                    </div>
                    <button className={'submit-button'}
                            type={"submit"}
                            disabled={!checked}
                            onClick={()=>{
                                loanData.id = uuidv4();
                                dispatch(postLoansLoading(loanData))
                            }}
                    >ثبت درخواست</button>
                </div>
            </div>
        </div>
    );
}