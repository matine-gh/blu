import Loan from "@/app/components/Loan";
import PersonalInformation from "@/app/components/PersonalInformation";
import BankInformation from "@/app/components/BankInformation";

export default function Main() {
    return (
        <div className={'m-10'}>
            <Loan />
            <PersonalInformation />
            <BankInformation />
        </div>
    )
}