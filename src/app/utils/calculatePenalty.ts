
export default function calculatePenalty(amount: number, penaltyRate: number) {
    return  Math.ceil(amount*penaltyRate/100)
}