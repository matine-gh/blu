'use client'

import { useFormik } from 'formik';
export default function BankForm({setStep}: (arg: number)=>void) {

    const formik = useFormik({
        initialValues: {
            accountNumber: '',
            sheba: '09',
            annualAverageAmount: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            setStep(4)
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={'space-y-8 [&>*]:max-w-72'}>
                <div>
                    <label htmlFor="accountNumber">شماره حساب</label>
                    <input
                        id="accountNumber"
                        name="accountNumber"
                        type="text"
                        dir={'ltr'}
                        onChange={formik.handleChange}
                        value={formik.values.accountNumber}
                    />
                </div>
                <div>
                    <label htmlFor="sheba">شماره شبا</label>
                    <input
                        id="sheba"
                        name="sheba"
                        type="text"
                        dir={'ltr'}
                        onChange={formik.handleChange}
                        value={formik.values.sheba}
                    />
                </div>
                <div>
                    <label htmlFor="annualAverageAmount">میانگین ریالی موجودی سالیانه</label>
                    <input
                        id="annualAverageAmount"
                        name="annualAverageAmount"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.annualAverageAmount}
                    />
                </div>
                <button className={'submit-button'+' '+''} type="submit">ثبت اطلاعات حساب</button>
            </form>
        </div>
    )
}