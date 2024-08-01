import * as loanInfo from "@/loanInfo.json";
import LoanRow from "@/app/components/Loan/LoanRow";
import {Dispatch, SetStateAction} from "react";
export default function LoansList({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {
    return (
        <div className={'container'}>
            <ul className={'space-y-6'}>
                {
                    loanInfo.data.map ((loan) => {
                        return(
                            <li key={loan.id}>
                                <LoanRow setStep={setStep}   loan={loan}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}