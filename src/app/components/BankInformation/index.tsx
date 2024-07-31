import BankForm from "@/app/components/BankInformation/BankForm";

export default function BankInformation({setStep}: (arg: number)=> void) {
    return (
        <div>
            <h1>اطلاعات بانک</h1>
            <BankForm setStep={setStep} />
        </div>
    )
}