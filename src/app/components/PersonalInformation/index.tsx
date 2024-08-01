import PersonalForm from "@/app/components/PersonalInformation/PersonalForm";
import {Dispatch, SetStateAction} from "react";

export default function PersonalInformation({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {
    return (
        <div className={'container'}>
            <h1>فرم اطلاعات متقاضی</h1>
            <PersonalForm setStep={setStep}/>
        </div>
    )
}