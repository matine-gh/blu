import LoansList from "@/app/components/Loan/LoanList";

export default function Loan({setStep}: (arg: number)=> void) {
    return (
        <div>
            <h1>تسهیلات</h1>
            <LoansList  setStep={setStep}/>
        </div>
    )
}