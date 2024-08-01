import LoansList from "@/app/components/Loan/LoanList";
import Icons from "../../../../public/Icons";
import {Dispatch, lazy, SetStateAction, Suspense} from "react";

export default function Loan({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {
    const LoansList = lazy(() => import('@/app/components/Loan/LoanList/index'));

    return (
        <div>
            <div className={'flex justify-between items-center'}>
                <h1>تسهیلات</h1>
                <a className={'flex items-center text-md text-primary-11 font-bold max-h-10 hover:-translate-x-6 duration-1000'} href={'/history'}>
                    <p>مشاهده تاریخچه</p>
                    <Icons name={'back'} />
                </a>
            </div>
            <Suspense fallback={'load'}>
                <LoansList  setStep={setStep}/>
            </Suspense>
        </div>
    )
}