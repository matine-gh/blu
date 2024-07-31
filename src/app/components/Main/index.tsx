'use client'
import Loan from "@/app/components/Loan";
import PersonalInformation from "@/app/components/PersonalInformation";
import BankInformation from "@/app/components/BankInformation";
import PreFactor from "@/app/components/PreFactor";
import {useState} from "react";

export default function Main() {

    const [step, setStep] = useState<number>(1)

    return (
        <div className={'m-10'}>
            {/*<Stepper step={2} />*/}
            {step === 1 && <Loan setStep={setStep} /> }
            {step === 2 && <PersonalInformation setStep={setStep} /> }
            {step >= 3 && <BankInformation setStep={setStep} /> }
            {step === 4 && <PreFactor />}
        </div>
    )
}