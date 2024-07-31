'use client'
import ToKeyValue from "@/app/components/Common/ToKeyValue";
import calculatePenalty from "@/app/utils/calculatePenalty";
import calculatePayment from "@/app/utils/calculatePayment";
import {Fragment, useState} from "react";

export default function PreFactor() {

    const [checked, setChecked] = useState<boolean>(false)

    const dataArray = [
        {name: 'مبلغ', value: ''},
        {name: 'مدت زمان بازپرداخت', value: ''},
        {name: 'تعداد اقساط', value: ''},
        {name: 'مبلغ قسط ماهیانه', value: calculatePayment(2,3,4)},
        {name: 'درصد سود سالیانه', value: ''},
        {name: 'مبلغ جریمه دیرکرد', value: calculatePenalty(10,40)},
    ]

    return (
        <div className={'container'+' '+'border-2 rounded-2xl p-8'}>
            <h1 className={'text-center'}>فرم تایید اطلاعات</h1>
            {dataArray.map((item)=>{
                return (
                    <Fragment key={item.name}>
                        <ToKeyValue {...item} />
                    </Fragment>
                )
            })}

            <div className="flex items-center">
                <input id="agree-checkbox"
                       type="checkbox"
                       checked={checked}
                       onChange={()=>setChecked(!checked)}
                       className="w-4 h-4 text-primary bg-secondary-02 border-secondary rounded focus:ring-primary-12 focus:ring-2" />
                    <label htmlFor="agree-checkbox" className="ms-2 text-xs font-medium text-secondary-17">
                        اطلاعات فوق را تایید میکنم.
                    </label>
            </div>
            <button className={'submit-button'}
                    type={"submit"}
                    disabled={!checked} onClick={()=>console.log('ثبت درخواست')}>ثبت درخواست</button>
        </div>
    )
}