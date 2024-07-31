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

    const formik = useFormik({
        initialValues: {
            accountNumber: '',
            sheba: 'IR',
            annualAverageAmount: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            setStep(4)
        },
    });

    return (
        <Formik
            initialValues={{ accountNumber: '',
                sheba: 'IR',
                annualAverageAmount: 0, }}
            onSubmit={values => setStep(4)}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="accountNumber">شماره حساب</label>
                        <Field validate={validateAccountNumber} name="accountNumber" type="text" />
                        {errors.accountNumber && touched.accountNumber ? <div>{errors.accountNumber}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="sheba">شماره شبا</label>
                        <Field validate={validateSheba} name="sheba" />
                        {errors.sheba && touched.sheba ? (
                            <div>{errors.sheba}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="annualAverageAmount">میانگین ریالی موجودی سالیانه</label>
                        <Field validate={validateAnnualAverageAmount} type={'number'} name="annualAverageAmount" />
                        {errors.annualAverageAmount && touched.annualAverageAmount ? (
                            <div>{errors.annualAverageAmount}</div>
                        ) : null}
                    </div>
                    <button type="submit" className={'submit-button'+' '+''}>ثبت اطلاعات حساب</button>
                </Form>
            )}
        </Formik>
        // <div>
        //     <form onSubmit={formik.handleSubmit} className={'space-y-8 [&>*]:max-w-72'}>
        //         <div>
        //             <label htmlFor="accountNumber">شماره حساب</label>
        //             <input
        //                 id="accountNumber"
        //                 name="accountNumber"
        //                 type="text"
        //                 dir={'ltr'}
        //                 onChange={formik.handleChange}
        //                 value={formik.values.accountNumber}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="sheba">شماره شبا</label>
        //             <input
        //                 id="sheba"
        //                 name="sheba"
        //                 type="text"
        //                 dir={'ltr'}
        //                 onChange={formik.handleChange}
        //                 value={formik.values.sheba}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="annualAverageAmount">میانگین ریالی موجودی سالیانه</label>
        //             <input
        //                 id="annualAverageAmount"
        //                 name="annualAverageAmount"
        //                 type="text"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.annualAverageAmount}
        //             />
        //         </div>
        //         <button className={'submit-button'+' '+''} type="submit">ثبت اطلاعات حساب</button>
        //     </form>
        // </div>
    )
}