import * as loanInfo from "@/loanInfo.json";
import LoanRow from "@/app/components/Loan/LoanRow";
export default function LoansList() {
    return (
        <div className={' m-4'}>
            <ul className={'space-y-6'}>
                {
                    loanInfo.data.map ((loan) => {
                        return(
                            <li key={loan.id}>
                                <LoanRow {...loan} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}