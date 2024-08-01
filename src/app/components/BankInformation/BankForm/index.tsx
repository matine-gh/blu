'use client'
import {Field, Form, Formik} from 'formik';
import { useFormik } from 'formik';

function validateAccountNumber(value) {
    let error;
    if (!value) {
        error = 'شماره حساب اجباری است';
        return error;
    }
}

function validateSheba(value) {
    let error;
    if (!value) {
        error = 'شماره شبا اجباری است';
    }
    else if (value.length !== 26 || !value.startsWith('IR'))
    {
        error = 'شماره شبا نامعتبر است';
    }
        return error;
}

function validateAnnualAverageAmount(value) {
    let error;
    if (!value) {
        error = 'میانگین ریالی موجودی سالیانه اجباری است';
    }
    if (Number(value) <= 0 )
    {
        error = "میانگین ریالی موجودی سالیانه نا معتبر است."
    }
    return error;
}


export default function BankForm({setStep}: (arg: number)=>void) {

    return (
        <div className={'formContainer'}>
            <Formik
                initialValues={{ accountNumber: '',
                    sheba: 'IR',
                    annualAverageAmount: 0, }}
                onSubmit={() => setStep(4)}
            >
                {({ errors, touched }) => (
                    <Form className={'md:grid grid-cols-3 grid-rows-4 gap-4'}>
                        <div className={'col-span-2 max-w-96'}>
                            <label htmlFor="accountNumber">شماره حساب</label>
                            <Field validate={validateAccountNumber} name="accountNumber" type="text" />
                            {errors.accountNumber && touched.accountNumber ? <div className={'errorMessage'} >{errors.accountNumber}</div> : null}
                        </div>
                        <div className={'col-span-2 row-start-2 max-w-96'}>
                            <label htmlFor="sheba">شماره شبا</label>
                            <Field validate={validateSheba} name="sheba"/>
                            {errors.sheba && touched.sheba ? (
                                <div className={'errorMessage'} >{errors.sheba}</div>
                            ) : null}
                        </div>
                        <div className={'col-span-2 row-start-3 max-w-96'}>
                            <label htmlFor="annualAverageAmount">میانگین ریالی موجودی سالیانه</label>
                            <Field validate={validateAnnualAverageAmount} type={'number'} name="annualAverageAmount" />
                            {errors.annualAverageAmount && touched.annualAverageAmount ? (
                                <div className={'errorMessage'} >{errors.annualAverageAmount}</div>
                            ) : null}
                        </div>
                        <button type="submit" className={'submit-button'+' '+'col-span-1 col-start-2 row-start-4'} disabled={Object.keys(errors).length > 0}>ثبت اطلاعات حساب</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}