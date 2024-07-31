'use client'
import {Field, Form, Formik} from 'formik';
import {DatePicker} from 'zaman';
import {useEffect, useState} from "react";

function validateFirstname(value) {
    let error;
    if (!value) {
        error = 'نام اجبرای است';
        return error;
    }
}

function validateLastname(value) {
    let error;
    if (!value) {
        error = 'نام خانوادگی اجباری است';
        return error;
    }
}

function validateNid(value) {
    let error;
    if (!value) {
        error = 'کد ملی اجباری است';
    }
    else if (value.length !== 10){
        error = 'کد ملی نامعتبر است.'
    }
    else if (!/^[0-9]+/i.test(value)) {
        error = 'کد ملی نامعتبر است.'
    }
    return error;
}

function validatePhoneNumber(value) {
    let error;
    if (!value) {
        error = 'شماره موبایل اجباری است.';
    }
    else if (!value.startsWith('09') || value.length !== 11)
    {
        error = 'شماره موبایل اشتباه است'
    }
    return error;
}

export default function PersonalForm({setStep}: (arg: number)=> void) {

    const [birthDate, setBirthDate] = useState<string>('');
    const userInformation = sessionStorage.getItem("userInformation");

    useEffect(() => {
        console.log("B", birthDate)
    }, [birthDate]);

    return (
        <Formik
            initialValues={{...JSON.parse(userInformation)}}
            onSubmit={values => {
                // same shape as initial values
                sessionStorage.setItem("userInformation", JSON.stringify(values));
                setStep(3)
            }}
        >
            {({ errors, touched }) => (
                <Form className={'md:grid grid-cols-5 grid-rows-4 gap-y-8 gap-x-4 max-md:space-y-8 [&>*]:max-w-72'}>
                    <div className="col-span-2">
                        <label htmlFor="firstName">نام</label>
                        <Field name="firstName" validate={validateFirstname} />
                        {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
                    </div>

                    <div className="col-span-2 col-start-4">
                        <label htmlFor="lastName">نام خانوادگی</label>
                        <Field name="lastName" validate={validateLastname} />
                        {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                    </div>

                    <div className="col-span-2 row-start-2">
                        <label htmlFor="nid">کد ملی</label>
                        <Field name="nid" type={'number'} validate={validateNid} />
                        {errors.nid && touched.nid && <div>{errors.nid}</div>}
                    </div>

                    <div className="group col-span-2 col-start-4 row-start-2">
                        <label htmlFor="birthday" >تاریخ تولد</label>
                        <DatePicker
                            inputClass={'relative flex justify-between items-center ' +
                                'rounded-lg focus:outline-primary '+
                                'h-10 w-full border-2 border-secondary ' +
                                'p-2 mt-2'}
                            onChange={(e) => {
                                setBirthDate(String(e.value))
                            }}
                            position={"center"}/>
                    </div>

                    <div className={'col-span-2 row-start-3'}>
                        <label htmlFor="phoneNumber">شماره تماس</label>
                        <Field name="phoneNumber" type={'number'} validate={validatePhoneNumber} />
                        {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
                    </div>


                    <button className={'submit-button'+' '+'col-start-3 row-start-4 '}
                            type="submit" disabled={Object.keys(errors).length > 0}>ثبت اطلاعات</button>
                </Form>
            )}
        </Formik>


    )
}