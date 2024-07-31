import * as loanInfo from "@/loanInfo.json";
import LoanRow from "@/app/components/Loan/LoanRow";
export default function LoansList({setStep}: (arg: number)=> void) {
    return (
        <div className={'container'}>
            <ul className={'space-y-6'}>
                {
                    loanInfo.data.map ((loan) => {
                        return(
                            <li key={loan.id}>
                                <LoanRow {...loan} setStep={setStep}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}