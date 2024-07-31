'use client'
import {LoanInterface} from "@/app/components/Loan/loan.interface";
import {useState} from "react";
import Icons from "../../../../../public/Icons";

export default function LoanRow({...loan}: LoanInterface) {
    const [showMore, setShowMore] = useState<boolean>(false);

    function onSelectLoan() {
        console.log('choose')
    }
    return (
        <div className={'p-4 border-4 border-primary rounded-xl divide-y divide-dashed divide-secondary-06 divide-y-2'}>
            <div className={'flex items-center justify-between'}>
                <div className={'space-y-3'}>
                    <strong className={'space-x-1'}>
                        <span>نوع</span>
                        <span>:</span>
                        <span>{loan.name}</span>
                    </strong>
                    <p className={'space-x-1'}>
                        <span>مبلغ</span>
                        <span>:</span>
                        <span>{loan.amount.toLocaleString()}ریال</span>
                    </p>
                </div>
                <div className={'flex gap-4 flex-wrap-reverse justify-end'}>
                    <button className={'hover:text-primary-10'} onClick={()=>setShowMore(!showMore)}>
                        <Icons name={'more'} />
                    </button>
                    <button className={'primary-button'+' '+'md:py-2 md:px-6'} onClick={onSelectLoan}>انتخاب</button>
                </div>
            </div>
            {showMore &&
                <div className={'mt-3 [&>*]:p-1'}>
                    <p>پرداخت در <b>{loan.repaymentType[0].value}</b> قسط</p>
                    <p className={'space-x-1'}>
                        <span>نرخ بهره</span>
                        <span>:</span>
                        <span>{loan.percentageRate || loan.interestRate}</span>
                        <span>درصد</span>
                    </p>
                    <p className={'space-x-1'}>
                        <span>نرخ جریمه</span>
                        <span>:</span>
                        <span>{loan.penaltyRate}</span>
                        <span>درصد</span>
                    </p>
                </div>
            }
        </div>
    )
}