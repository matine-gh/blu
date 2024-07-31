export default function calculatePayment(amount: number, interestRate: number, months: number) {
    return Math.ceil((amount+(amount*(interestRate/100)))/months)
}

