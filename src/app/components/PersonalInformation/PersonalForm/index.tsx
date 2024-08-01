'use client'
import {Field, Form, Formik} from 'formik';
import {DatePicker} from 'zaman';
import {Dispatch, SetStateAction, useState} from "react";
import {isNidValid} from "@/app/utils/nidValidation";

function validateFirstname(value: string): string| null {
    let error : string | null = null;
    if (!value) {
        error = 'نام اجباری است';
    }
    return (error);
}

function validateLastname(value: string) {
    let error;
    if (!value) {
        error = 'نام خانوادگی اجباری است';
        return error;
    }
}

function validateNid(value: string) {
    let error;
    if (!value) {
        error = 'کد ملی اجباری است';
    }
    else if (value.length !== 10 || !/^[0-9]+/i.test(value) ||  !isNidValid(value) ){
        error = 'کد ملی نامعتبر است.'
    }
    return error;
}

function validatePhoneNumber(value: string) {
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

export default function PersonalForm({setStep}:{setStep :Dispatch<SetStateAction<number>>}) {

    const [birthDate, setBirthDate] = useState<string>('');
    const userInformation = sessionStorage.getItem("userInformation");

    const initValue = userInformation ? {...JSON.parse(userInformation)} : {phoneNumber :"09",firstName:"",lastName:"",nid:"",
    }

    return (
        <div className={'formContainer'}>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                    values['birthDate'] = birthDate
                    sessionStorage.setItem("userInformation", JSON.stringify(values));
                    setStep(3)
                }}
            >
                {({ errors, touched}) => (
                    <Form className={'md:grid grid-cols-5 grid-rows-4 gap-x-4 max-md:space-y-8 [&>*]:max-w-72 [&>*]:min-h-24'}>
                        <div className="col-span-2">
                            <label htmlFor="firstName">*نام</label>
                            <Field name="firstName" validate={validateFirstname} />
                            {errors.firstName && touched.firstName && <div className={'errorMessage'}>{errors.firstName as string}</div>}
                        </div>

                        <div className="col-span-2 col-start-4">
                            <label htmlFor="lastName">*نام خانوادگی</label>
                            <Field name="lastName" validate={validateLastname} />
                            {errors.lastName && touched.lastName && <div className={'errorMessage'}>{errors.lastName as string}</div>}
                        </div>

                        <div className="col-span-2 row-start-2">
                            <label htmlFor="nid">*کد ملی</label>
                            <Field name="nid" type={'text'} validate={validateNid}/>
                            {errors.nid && touched.nid && <div className={'errorMessage'}>{errors.nid as string}</div>}
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
                            <label htmlFor="phoneNumber">*شماره تماس</label>
                            <Field name="phoneNumber" type={'text'} validate={validatePhoneNumber} />
                            {errors.phoneNumber && touched.phoneNumber && <div className={'errorMessage'}>{errors.phoneNumber as string}</div>}
                        </div>


                        <button className={'submit-button'+' '+'col-start-3 row-start-4 !min-h-12 '}
                                type="submit" disabled={Object.keys(errors).length > 0}>ثبت اطلاعات</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}