export interface LoanInterface {
    id: string,
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