import BankForm from "@/app/components/BankInformation/BankForm";
import {Dispatch, SetStateAction} from "react";

export default function BankInformation({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {
    return (
        <div>
            <h1>اطلاعات بانک</h1>
            <BankForm setStep={setStep} />
        </div>
    )
}