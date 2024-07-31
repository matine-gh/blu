export default function calculatePayment(amount: number, interestRate: number, months: number) {
    return ((amount+(amount*interestRate))/months)
}