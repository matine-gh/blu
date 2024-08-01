'use client'
import {useState} from "react";
import Icons from "../../../../../public/Icons";
import {LoanRowInterface} from "@/app/components/Loan/LoanRow/loanRow.interface";
import toFarsiNumber from "@/app/utils/ToFarsiNumbers";
import ToKeyValue from "@/app/components/Common/ToKeyValue";

export default function LoanRow({step, setStep, ...loan }: LoanRowInterface ) {
    const [showMore, setShowMore] = useState<boolean>(false);

    function onSelectLoan() {
        sessionStorage.setItem("selectedLoanInformation", JSON.stringify(loan));
        setStep(2)
    }

    return (
        <div className={'group transition-all duration-3000 bg-primary-01 p-4 border-4 border-primary rounded-xl divide-y divide-dashed divide-secondary-06'}>
            <div className={'flex items-center justify-between'}>
                <div className={'space-y-3'}>
                    <strong>
                        <ToKeyValue  name={"نوع"} value={loan.name}/>
                    </strong>
                    <ToKeyValue  name={"مبلغ"} value={`${toFarsiNumber(loan.amount.toLocaleString())} ریال`}/>
                </div>
                <div className={'flex gap-4 flex-wrap-reverse justify-end'}>
                    <button className={'hover:text-primary-10 group-hover:animate-bounce text-primary-11'} onClick={()=>setShowMore(!showMore)}>
                        <Icons name={'more'} />
                    </button>
                    <button className={'primary-button'+' '+'md:py-2 md:px-6'} onClick={onSelectLoan}>انتخاب</button>
                </div>
            </div>
            {showMore &&
                <div className={'mt-3 [&>*]:p-1'}>
                    <p>پرداخت در <b>{loan.repaymentType[0].value}</b> قسط</p>
                    <p className={'space-x-1'}>
                        <ToKeyValue  name={"نرخ بهره"} value={`${loan.percentageRate || loan.interestRate} درصد`}/>
                    </p>
                    <p className={'space-x-1'}>
                        <ToKeyValue  name={"نرخ جریمه"} value={`${loan.penaltyRate} درصد`}/>
                    </p>
                </div>
            }
        </div>
    )
}