import PersonalForm from "@/app/components/PersonalInformation/PersonalForm";

export default function PersonalInformation({setStep}: (arg: number)=> void) {
    return (
        <div className={'container'}>
            <h1>فرم اطلاعات متقاضی</h1>
            <PersonalForm setStep={setStep}/>
        </div>
    )
}