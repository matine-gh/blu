'use client'
import { useFormik } from 'formik';

export default function PersonalForm({setStep}: (arg: number)=> void) {


    const userInformation = sessionStorage.getItem("userInformation");

    const formik = useFormik({
        initialValues: {...JSON.parse(userInformation)},
        onSubmit: values => {
            sessionStorage.setItem("userInformation", JSON.stringify(values));
            setStep(3)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={'md:grid grid-cols-5 grid-rows-4 gap-y-8 gap-x-4 max-md:space-y-8 [&>*]:max-w-72'}>
            <div className="col-span-2">
                <label htmlFor="firstName">نام</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </div>
            <div className="col-span-2 col-start-4">
                <label htmlFor="lastName">نام خانوادگی</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required={true}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
            </div>
            <div className="col-span-2 row-start-2">
                <label htmlFor="nid">کد ملی</label>
                <input
                    id="nid"
                    name="nid"
                    type="text"
                    dir={'ltr'}
                    onChange={formik.handleChange}
                    value={formik.values.nid}
                />
            </div>
            <div className="group col-span-2 col-start-4 row-start-2">
                <label clhtmlFor="col-span-2 row-start-1 group-focus:text-red-600">تاریخ تولد</label>
                <input
                    id="birthday"
                    name="birthday"
                    type="text"
                    className={''}
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                />
            </div>
            <div className={'col-span-2 row-start-3'}>
                <label htmlFor="phoneNumber">شماره تماس</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    dir={'ltr'}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                />
            </div>
            <button className={'submit-button'+' '+'col-start-3 row-start-4 '} type="submit">ثبت اطلاعات</button>
        </form>
    )
}