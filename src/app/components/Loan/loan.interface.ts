export interface LoanInterface {
    id: number,
    createdDate: number,
    name: string,
    repaymentType: [
        {
            name: string,
            value: number
        }
    ],
    amount: number,
    percentageRate: number,
    interestRate: number,
    penaltyRate: number
}