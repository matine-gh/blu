import {LoanInterface} from "@/app/components/Loan/loan.interface";
export interface LoanRowInterface  {
    loan: LoanInterface
    setStep : (arg: number) => void
}